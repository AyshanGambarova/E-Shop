import { defineComponent, onMounted, ref } from "vue";
import $http from "@/utils/interceptors";
import {useRoute} from 'vue-router'
import { StarIcon } from '@heroicons/vue/20/solid'

export default defineComponent({
  name: "ProductInfoPage",
  components: {StarIcon},
  setup() {
    // #region States
    const product = ref<any>({});
    const $route = useRoute()
    const productId = ref<number>(Number($route.params.id))
   
    // #endregion

    // #region Methods

    async function getProduct() {
      try {
        const response = await $http({
          method: "GET",
          url: `/products/${productId.value}`,
        });
        console.log(response.data);
        product.value=response.data;
      
      } catch (error) {
        console.log(error);
      }
    }
   

    //#endregion

    // #region Hooks

    onMounted(() => {
      getProduct()
    });

    // #endregion
    return {
      product
    };
  },
});
