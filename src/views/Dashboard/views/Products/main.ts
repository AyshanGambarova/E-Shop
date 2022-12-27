import { defineComponent, onMounted, ref, computed } from "vue";
import $http from "@/utils/interceptors";
import { Getter, Mutation, Action } from "@/helpers/store";
import { EnumStoreNamespace } from "@/enums";
import {
  GET_CART,
  SET_CART,
  ADD_TO_CART,
} from "@/store/modules/cart/constants";
import { apiProducts } from "@/apis/dashboard/product";

export default defineComponent({
  name: "ProductsPage",
  setup() {
    // #region States
    const products = ref<any>([]);
    const selectedProductId = ref<number>(0);
    let skip = ref<number>(0);
    let loading = ref<boolean>(false);
    let limit = ref<number>(10);
    let total = ref<number>(0);

    // #endregion

    // #region Computed
    const cart = computed(() => {
      return Getter({
        namespace: EnumStoreNamespace.CART,
        getter: GET_CART,
      });
    });

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
      const response = await apiProducts(skipNumber, limitNumber);
      skip.value = skipNumber + limitNumber;
      loading.value = false;
      products.value = [...products.value, ...response.data.products];
    }

    function addToCart(product: any) {
      Action({
        namespace: EnumStoreNamespace.CART,
        action: ADD_TO_CART,
        payload: product,
      });
      Mutation({
        namespace: EnumStoreNamespace.CART,
        mutation: SET_CART,
        payload: cart.value,
      });
      selectedProductId.value = product.id;
      setTimeout(function () {
        selectedProductId.value = 0;
      }, 1000);
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
      addToCart,
      selectedProductId,
    };
  },
});
