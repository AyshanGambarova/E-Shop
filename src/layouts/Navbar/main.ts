import {computed, defineComponent,ref} from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Navbar',
  //@ts-ignore

  setup() {
    // #region State
    const $router = useRouter()
    let isOpen = ref<boolean>(false)
    // #endregion

    // #region Method
    async function logOut() {
      localStorage.removeItem('token')
      await $router.push({path:'/login'})
    }
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
      isOpen,
      logOut
    }
  }
})