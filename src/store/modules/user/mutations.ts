import { SET_CURRENT_USER } from "./constants";

export default {
  [SET_CURRENT_USER](state: any, currentUser: any) {
    state.currentUser = currentUser;
  },
};
