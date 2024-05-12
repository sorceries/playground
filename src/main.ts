import { createApp } from "vue";
import App from "./App";
import router from "@/router";
import "@/assets/styles/reset.scss";

const app = createApp(App);
app.use(router);
router.isReady().then(() => {
  app.mount("#app");
});
