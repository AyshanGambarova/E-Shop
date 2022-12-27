import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { Mutation, Getter } from "@/helpers/store";
import { EnumStoreNamespace } from "@/enums";
import { GET_CART, SET_CART } from "@/store/modules/cart/constants";
import { GET_CURRENT_USER } from "@/store/modules/user/constants";

export default defineComponent({
  name: "Navbar",
  //@ts-ignore

  setup() {
    // #region State
    const $router = useRouter();
    let isOpen = ref<boolean>(false);
    

    // #endregion

    // #region Method
    async function logOut() {
      localStorage.removeItem("token");
      await $router.push({ path: "/login" });
    }
    // #endregion

    // #region Computed
    const getCart = computed(() => {
      return Getter({
        namespace: EnumStoreNamespace.CART,
        getter: GET_CART,
      });
    });
    const currentUser = computed(() => {
      return Getter({
        namespace: EnumStoreNamespace.USER,
        getter: GET_CURRENT_USER,
      });
    });

    const cartTotalCount = computed(() => {
      let total = 0;
      getCart.value.forEach((item: any) => {
        total += item.quantity;
      });
      return total;
    });

    // #endregion
    
    return {
      isOpen,
      logOut,
      currentUser,
      cartTotalCount,
    };
  },
});
