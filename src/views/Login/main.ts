import { defineComponent, ref } from "vue";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import type { TLoginUser } from "@/types/User";
import $http from "@/utils/interceptors";

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

    // #endregion

    // #region Methods

    async function handleSubmit() {
      try {
        const response = await $http({
          method: "POST",
          data: creatingUser.value,
          url: `/auth/login`,
        });
        localStorage.setItem("token", response.data.token);
        await $router.push({ path: "/products" });
      } catch (error) {
        alert("Form is invalid");
      }
      creatingUser.value = {
        username: "",
        password: "",
      };
    }

    // #endregion

    return {
      creatingUser,
      handleSubmit,
    };
  },
});
