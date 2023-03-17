import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import axios from "axios";
// import { useRoute } from "vue-router";

const app = createApp(App);

// app.config.globalProperties.$axios = axios;
// app.config.globalProperties.$useRoute = useRoute;

app.use(router);

app.mount("#app");
