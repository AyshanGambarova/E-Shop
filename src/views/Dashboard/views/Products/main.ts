import { defineComponent, onMounted, ref } from "vue";
import $http from "@/utils/interceptors";

export default defineComponent({
  name: "ProductsPage",
  setup() {
    // #region States
    
    const products = ref<any>([]);

    // #endregion

    // #region Methods

    async function getProducts() {
      try {
        const response = await $http({
          method: "GET",
          url: `/products`,
        });
        products.value = response.data.products;
        // products.value=[...response.data.products]
      } catch (error) {
        console.log(error);
      }
    }

    //#endregion

    // #region Hooks

    onMounted(() => {
      getProducts();
    });

    // #endregion
    return {
      products,
    };
  },
});
