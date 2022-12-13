import { defineComponent, onMounted, ref } from "vue";
import $http from "@/utils/interceptors";

export default defineComponent({
  name: "ProductsPage",
  setup() {
    // #region States

    const products = ref<any>([]);
    let skip = ref<number>(0);
    let loading = ref<boolean>(false);
    let limit = ref<number>(10);
    let total = ref<number>(0);

    // #endregion

    // #region Methods

    async function getProducts(event: any) {
      try {
        let { scrollTop, clientHeight, scrollHeight } =
          event.target.scrollingElement;
        if (
          !loading.value &&
          skip.value != total.value &&
          scrollTop + clientHeight >= (scrollHeight * 4) / 5
        ) {
          triggerProducts(skip.value, limit.value);
        }
      } catch (error) {
        console.log(error);
      }
    }
    async function triggerProducts(skipNumber: number, limitNumber: number) {
      loading.value = true;
      const response = await $http({
        method: "GET",
        url: `/products`,
        params: {
          skip: skipNumber,
          limit: limitNumber,
        },
      });
      skip.value = skipNumber + limitNumber;
      loading.value = false;
      products.value = [...products.value, ...response.data.products];
    }

    //#endregion

    // #region Hooks

    onMounted(() => {
      window.addEventListener("scroll", (event: any) => {
        getProducts(event);
      });
      triggerProducts(skip.value, limit.value);
    });

    // #endregion
    return {
      products,
      loading,
      getProducts,
    };
  },
});
