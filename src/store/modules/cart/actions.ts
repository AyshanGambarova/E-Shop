import { ADD_TO_CART } from "./constants";

export default {
  [ADD_TO_CART]({ commit, state }: any, product: any) {
    const productInCart = state.cart.find((item: any) => {
      return item.product.id === product.id;
    });
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      state.cart.push({ product, quantity: 1 });
    }
  },
};
