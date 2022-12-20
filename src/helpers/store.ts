import $store from "@/store";

export function Action({ namespace, action, payload }: any) {
  console.log(action, "action");

  $store.dispatch("user/SET_CURRENT_USER", { name: "Ayse" });
  //$store.dispatch(namespace + "/" + action, payload);
}

export function Getter({ namespace, getter }: any) {
  return $store.getters[namespace + "/" + getter];
}
