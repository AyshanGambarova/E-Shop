import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { loadFonts } from "./plugins/webfontloader";

import "./assets/main.css";

loadFonts();

createApp(App).use(router).mount("#app");
