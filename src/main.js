import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css";
import Spinner from "./components/UI/Spinner"; //global component
import Modal from "./components/UI/Modal"; //global component

const app = createApp(App);
app.use(router);

app.component("Spinner", Spinner);
app.component("Modal", Modal);

app.mount("#app");
