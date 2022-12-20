import { SET_CURRENT_USER } from "./constants";

export default {
  [SET_CURRENT_USER](state: any, currentUser: any) {
    console.log(currentUser, "mutations");

    state.currentUser = currentUser;
  },
};
