import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';

const app = createApp(App)
app.use(router).use(VueAxios, axios).mount('#app')
app.config.globalProperties.$baseUrlApi = process.env.VUE_APP_BASE_URL_API

//axios.defaults.baseURL = process.env.VUE_APP_BASE_URL_API