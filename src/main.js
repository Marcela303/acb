import { createApp } from "vue";
import { createPinia } from "pinia";

export default BootstrapVue3;

import {BootstrapVue3} from 'bootstrap-vue-3';

import App from "./App.vue";
import router from "./router";

/*import BootstrapVue from 'bootstrap-vue-3/dist/bootstrap-vue-3.es'*/
import 'bootstrap/dist/css/bootstrap.css';


const app = createApp(App);
app.use(BootstrapVue3)

app.use(createPinia());
app.use(router);

app.mount("#app");
