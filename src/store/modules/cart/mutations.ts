import { SET_CART } from "./constants";

export default {
  [SET_CART](state: any, cart: any) {
    state.cart = cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  },
};
