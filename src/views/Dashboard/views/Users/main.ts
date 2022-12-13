import { defineComponent, onMounted, ref } from "vue";
import $http from "@/utils/interceptors";
export default defineComponent({
  name: "UsersPage",
  setup() {
    // #region State

    const users = ref<any>([]);

    // #endregion

    // #region Methods

    async function getUsers() {
      try {
        const response = await $http({
          method: "GET",
          url: `/users`,
        });
        // console.log(response.data);
        users.value = response.data.users;
      } catch (error) {
        console.log(error);
      }
    }

    //#endregion

    // #region Hooks

    onMounted(() => {
      getUsers();
    });

    // #endregion
    return {
      users
    };
  },
});
