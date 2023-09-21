import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css";
import Spinner from "./components/UI/Spinner"; //global component

const app = createApp(App);
app.use(router);


app.component("Spinner", Spinner);

app.mount("#app");
