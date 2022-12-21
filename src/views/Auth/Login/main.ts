import { defineComponent, ref, onMounted } from "vue";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import type { TLoginUser } from "@/types/User";
import { useVuelidate } from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
import $http from "@/utils/interceptors";
import { EnumStoreNamespace } from "@/enums";
import { SET_CURRENT_USER } from "@/store/modules/user/constants";
import { Mutation } from "@/helpers/store";

export default defineComponent({
  name: "LoginPage",
  components: { LockClosedIcon },
  //@ts-ignore
  setup() {
    // #region State
    const $router = useRouter();
    
    let creatingUser = ref<TLoginUser>({
      username: "",
      password: "",
    });
    const rules = {
      username: { required }, // Matches creatingUser.username
      password: { required, min: minLength(6) }, // Matches creatingUser.password
    };
    const validate: any = useVuelidate(rules, creatingUser.value);

    // #endregion

    // #region Methods
    const handleBlur = (key: any) => {
      validate.value[key].$dirty = true;
      console.log(validate.value.username.$errors);
    };

    async function handleSubmit() {
      validate.value.$dirty = true;
      if (!validate.value.$error) {
        try {
          const response = await $http({
            method: "POST",
            data: creatingUser.value,
            url: `/auth/login`,
          });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("currentUser", JSON.stringify(response.data));

          await $router.push({ path: "/products" });
        } catch (error) {}
        creatingUser.value = {
          username: "",
          password: "",
        };
      }
    }

    // #endregion

    return {
      creatingUser,
      validate,
      handleSubmit,
      handleBlur,
    };
  },
});
