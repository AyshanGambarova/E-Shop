import { defineComponent, onMounted, ref } from "vue";
import $http from "@/utils/interceptors";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "UserInfoPage",

  setup() {
    // #region States
    const user = ref<any>({});
    const $route = useRoute();
    const userId = ref<number>(Number($route.params.id));

    // #endregion

    // #region Methods

    async function getUser() {
      try {
        const response = await $http({
          method: "GET",
          url: `/users/${userId.value}`,
        });
         user.value=response.data;
      } catch (error) {
        console.log(error);
      }
    }

    //#endregion

    // #region Hooks

    onMounted(() => {
      getUser();
    });

    // #endregion
    return {
      user
    };
  },
});
