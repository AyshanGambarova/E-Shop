import { createStore } from "vuex";
import { pagination } from "./modules/pagination";
import { user } from "./modules/user";
import { cart } from "./modules/cart";

export default createStore({
  modules: {
    pagination,
    user,
    cart,
  },
});
