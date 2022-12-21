import { defineComponent, onMounted, ref } from "vue";
import $http from "@/utils/interceptors";
import { Mutation } from "@/helpers/store";
import { EnumStoreNamespace } from "@/enums";
import { SET_CART } from "./../../../../store/modules/cart/constants";

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

    function addToCart(product: any) {
      let cart = JSON.parse(localStorage.getItem("cart")!);
      const productInCart = cart.find((item: any) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        cart.push({ product, quantity: 1 });
      }
      Mutation({
        namespace: EnumStoreNamespace.CART,
        mutation: SET_CART,
        payload: cart,
      });
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
    };
  },
});
