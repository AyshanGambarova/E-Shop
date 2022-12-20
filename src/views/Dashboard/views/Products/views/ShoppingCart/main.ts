import { Getter } from "@/helpers/store";
import { computed, defineComponent, ref } from "vue";
import { EnumStoreNamespace } from "@/enums";

export default defineComponent({
  name: "ShoppingCartPage",
  setup() {
    // #region Computed
    const cart = computed(() => {
      return JSON.parse(localStorage.getItem("cart")!);
    });

    const cartTotalPrice = computed(() => {
      let total = 0;
      cart.value.forEach((item: any) => {
        total += parseFloat(item.product.price * item.quantity, 10);
      });
      return total.toFixed(2);
    });

    // #endregion

    // #region Method
    const updateLocalStorage = () => {
      localStorage.setItem("cart", JSON.stringify(cart.value));
    };
    const increaseQuantity = (id: number) => {
      const incresedItem = cart.value.filter((x: any) => x.product.id === id);
      incresedItem[0].quantity++;
      updateLocalStorage();
    };
    const decreaseQuantity = (id: number) => {
      const decresedItem = cart.value.filter((x: any) => x.product.id === id);
      if (decresedItem[0].quantity === 0) {
        return;
      }
      decresedItem[0].quantity--;
      updateLocalStorage();
    };
    const caclItemPrice = (item: any) => {
      return item.product.price * item.quantity;
    };
    const removeProduct = (index: number) => {
      cart.value.splice(index, 1);
      updateLocalStorage();
    };
    // #endregion

    return {
      cart,
      cartTotalPrice,
      caclItemPrice,
      removeProduct,
      decreaseQuantity,
      increaseQuantity,
    };
  },
});
