import { createApp } from "vue";
import router from "./router";
import store from "./vuex";
import FontAwesomeIcon from "./fontawesome";
import App from "./App.vue";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(store);
app.mount("#app");