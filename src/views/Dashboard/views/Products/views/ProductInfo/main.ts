import { defineComponent, onMounted, ref } from "vue";
import $http from "@/utils/interceptors";
import { useRoute } from "vue-router";
import { StarIcon } from "@heroicons/vue/20/solid";

export default defineComponent({
  name: "ProductInfoPage",
  components: { StarIcon },
  setup() {
    // #region States
    const product = ref<any>({});
    const $route = useRoute();
    const productId = ref<number>(Number($route.params.id));

    // #endregion

    // #region Methods

    async function getProduct() {
      try {
        const response = await $http({
          method: "GET",
          url: `/products/${productId.value}`,
        });
        product.value = response.data;
      } catch (error) {
        console.log(error);
      }
    }

    function addToCart(product: any) {
      //hecvact null ola bilmez demekdir !

      let cart = JSON.parse(localStorage.getItem("cart")!);
      const productInCart = cart.find((item: any) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        cart.push({ product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
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
    };
  },
});
