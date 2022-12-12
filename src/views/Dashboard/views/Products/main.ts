import { defineComponent, onMounted, ref } from "vue";
import $http from "@/utils/interceptors";

export default defineComponent({
  name: "ProductsPage",
  setup() {
    // #region States

    // const products = [
    //   {
    //     id: 1,
    //     name: 'Basic Tee',
    //     href: '#',
    //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //     imageAlt: "Front of men's Basic Tee in black.",
    //     price: '$35',
    //     color: 'Black',
    //   },
    //   {
    //     id: 2,
    //     name: 'Basic Tee',
    //     href: '#',
    //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //     imageAlt: "Front of men's Basic Tee in black.",
    //     price: '$35',
    //     color: 'Black',
    //   }
    //   ,  {
    //     id: 3,
    //     name: 'Basic Tee',
    //     href: '#',
    //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //     imageAlt: "Front of men's Basic Tee in black.",
    //     price: '$35',
    //     color: 'Black',
    //   }
    //   // More products...
    // ]
    const products = ref<any>([]);

    // #endregion

    // #region Methods

    async function getProducts() {
      try {
        const response = await $http({
          method: "GET",
          url: `/products`,
        });
        products.value = response.data.products;
        // products.value=[...response.data.products]
      } catch (error) {
        console.log(error);
      }
    }

    //#endregion

    // #region Hooks

    onMounted(() => {
      getProducts();
    });

    // #endregion
    return {
      products,
    };
  },
});
