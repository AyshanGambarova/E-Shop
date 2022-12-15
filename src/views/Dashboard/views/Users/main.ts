import { computed, defineComponent, onMounted, ref, watch } from "vue";
import $http from "@/utils/interceptors";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";
import Pagination from "@/components/Pagination/index.vue";
import { Getter } from "@/helpers/store";

export default defineComponent({
  name: "UsersPage",
  components: { Pagination, ChevronLeftIcon, ChevronRightIcon },
  setup() {
    // #region State

    const users = ref<any>([]);
    const page = ref<number>(0);
    const totalPages = ref<number>(4);
    const total = ref<number>(40);
    const perPage = ref<number>(10);
    const currentPage = ref<number>(1);
    const hasMorePages = ref<boolean>(true);

    // #endregion

    // #region Methods
    
    function showMore(pg: number) {
      page.value = pg;
      currentPage.value = pg;
    }
    async function triggerUsers(skipNumber: number, limitNumber: number) {
      if (skipNumber > 0) {
        skipNumber = skipNumber - 1;
      }
      const response = await $http({
        method: "GET",
        url: `/users`,
        params: {
          skip: skipNumber * limitNumber,
          limit: limitNumber,
        },
      });
      users.value = response.data.users;
    }

    async function getUsers() {
      try {
        triggerUsers(page.value, perPage.value);
      } catch (error) {
        console.log(error);
      }
    }

    //#endregion

    // #region Watch

    watch(page, () => {
      triggerUsers(page.value, perPage.value);
    });

    // #endregion

    // #region Hooks

    onMounted(() => {
      getUsers();
    });

    // #endregion
    return {
      users,
      totalPages,
      currentPage,
      hasMorePages,
      showMore,
    };
  },
});
