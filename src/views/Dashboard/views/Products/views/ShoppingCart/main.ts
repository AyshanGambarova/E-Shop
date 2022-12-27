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

enum EnumRemovingProcess {
  SPECIFIC = "SPECIFIC",
  ALL = "ALL",
}

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
    // state store methods computed watch hooks ardicilliq bele olsun ve open nedi daha aydin yaz
    // #region State
    const open = ref<boolean>(false);
    const removingProductIndex = ref<any>(null);
    let removingProcess = ref<string>("");

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
    const updateStore = (payload?: any) => {
      Mutation({
        namespace: EnumStoreNamespace.CART,
        mutation: SET_CART,
        payload: payload || cart.value,
      });
    };
    //Burada itemin ozunude goturub quantity'in artira bilerdik
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

    const removingSelectedProduct = (index: number) => {
      removingProcess.value = EnumRemovingProcess.SPECIFIC;
      removingProductIndex.value = index;
      open.value = true;
    };

    const removeSelectedProduct = () => {
      open.value = false;
      cart.value.splice(removingProductIndex.value, 1);
      updateStore();
    };

    const removingAllProducts = () => {
      removingProcess.value = EnumRemovingProcess.ALL;
      open.value = true;
    };

    const removeAllProducts = () => {
      const emptyCart: any = [];
      localStorage.setItem("cart", JSON.stringify(emptyCart));
      updateStore(emptyCart);
      open.value = false;
    };

    const removeProduct = () => {
      if (removingProcess.value === EnumRemovingProcess.ALL) {
        removeAllProducts();
      } else if (removingProcess.value === EnumRemovingProcess.SPECIFIC) {
        removeSelectedProduct();
      }
    };

    // #endregion

    return {
      EnumRemovingProcess,
      cart,
      open,
      cartTotalPrice,
      removingProcess,
      caclItemPrice,
      removeProduct,
      removingSelectedProduct,
      removingAllProducts,
      decreaseQuantity,
      increaseQuantity,
    };
  },
});
