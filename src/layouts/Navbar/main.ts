import {computed, defineComponent,ref} from 'vue'

export default defineComponent({
  name: 'Navbar',
  //@ts-ignore

  setup() {
    // #region State
    let isOpen = ref<boolean>(false)
    // #endregion

    // #region Computed
    const cart = computed(() => {
      return JSON.parse(localStorage.getItem("cart")!);
    });
    const cartTotalQuantity = computed(() => {
      let total = 0;
      cart.value.forEach((item) => {
        total += item.quantity;
      });
      return total;
    });

    // #endregion
    return {
      cartTotalQuantity,
      isOpen
    }
  }
})