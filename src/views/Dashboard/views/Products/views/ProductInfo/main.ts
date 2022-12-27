import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { StarIcon } from "@heroicons/vue/20/solid";
import { Getter, Mutation, Action } from "@/helpers/store";
import { EnumStoreNamespace } from "@/enums";
import {
  GET_CART,
  SET_CART,
  ADD_TO_CART,
} from "@/store/modules/cart/constants";
import { apiProduct } from "@/apis/dashboard/product";

export default defineComponent({
  name: "ProductInfoPage",
  components: { StarIcon },
  setup() {
    // #region States
    const product = ref<any>({});
    const $route = useRoute();
    const productId = ref<number>(Number($route.params.id));
    const addedToCart = ref<boolean>(false);

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

    async function getProduct() {
      try {
        const response = await apiProduct(productId.value);
        product.value = response.data;
      } catch (error) {
        console.log(error);
      }
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
      addedToCart.value = true;
      setTimeout(function () {
        addedToCart.value = false;
      }, 1500);
    }

    //#endregion

    // #region Hooks

    onMounted(() => {
      getProduct();
    });

    // #endregion
    return {
      product,
      addToCart,
      addedToCart,
    };
  },
});
