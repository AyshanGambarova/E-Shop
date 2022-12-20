import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'Navbar',
  //@ts-ignore
  setup() {
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

    return {
      cartTotalQuantity
    }
  }
})