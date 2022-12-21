import { Getter, Mutation } from "@/helpers/store";
import { computed, defineComponent, ref, watch, onMounted } from "vue";
import { EnumStoreNamespace } from "@/enums";
import { GET_CART, SET_CART } from "@/store/modules/cart/constants";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

export default defineComponent({
  name: "ShoppingCartPage",
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationTriangleIcon,
  },
  setup() {
    // #region State
    const open=ref<boolean>(false);
    
    // #endregion

    // #region Computed
    const cart = computed(() => {
      return Getter({
        namespace: EnumStoreNamespace.CART,
        getter: GET_CART,
      });
    });
    const cartTotalPrice = computed(() => {
      let total = 0;
      cart.value.forEach((item: any) => {
        total += item.product.price * item.quantity;
      });
      return total.toFixed(2);
    });

    // #endregion

    // #region Method
    const updateStore = () => {
      Mutation({
        namespace: EnumStoreNamespace.CART,
        mutation: SET_CART,
        payload: cart.value,
      });
    };
    const increaseQuantity = (id: number) => {
      const incresedItem = cart.value.filter((x: any) => x.product.id === id);
      incresedItem[0].quantity++;
      updateStore();
    };
    const decreaseQuantity = (id: number) => {
      const decresedItem = cart.value.filter((x: any) => x.product.id === id);
      if (decresedItem[0].quantity === 1) {
        return;
      }
      decresedItem[0].quantity--;
      updateStore();
    };
    const caclItemPrice = (item: any) => {
      return item.product.price * item.quantity;
    };
    const removeProduct = (index: number) => {
      cart.value.splice(index, 1);
      console.log(cart.value);
      updateStore();
    };
    // #endregion


    return {
      cart,
      open,
      cartTotalPrice,
      caclItemPrice,
      removeProduct,
      decreaseQuantity,
      increaseQuantity,
    };
  },
});
