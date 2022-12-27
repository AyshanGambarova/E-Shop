import { defineComponent, ref, onMounted } from "vue";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import type { TLoginUser } from "@/types/User";
import { useVuelidate } from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
import { apiLogin } from "@/apis/auth/login";

export default defineComponent({
  name: "LoginPage",
  components: { LockClosedIcon },
  //@ts-ignore
  setup() {
    // #region State
    const $router = useRouter();

    let loginingUser = ref<TLoginUser>({
      username: "",
      password: "",
    });
    const rules = {
      username: { required }, // Matches loginingUser.username
      password: { required, min: minLength(6) }, // Matches loginingUser.password
    };
    const validate: any = useVuelidate(rules, loginingUser.value);

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
          const response = await apiLogin(loginingUser.value);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("currentUser", JSON.stringify(response.data));
          await $router.push({ path: "/products" });
        } catch (error) {}
        loginingUser.value = {
          username: "",
          password: "",
        };
      }
    }

    // #endregion

    return {
      loginingUser,
      validate,
      handleSubmit,
      handleBlur,
    };
  },
});
