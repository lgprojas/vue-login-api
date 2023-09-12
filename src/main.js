import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
//import helper from './helper/auth.js'

const app = createApp(App)

var token = localStorage.getItem('token');
if(token)
    //console.log("me ejecuto")
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;//Se envía el refreshToken

    //Se debe generar con el refreshToken un nuevo Token al actualizar la página
    const getNewToken = async() => {
        const BASE_URL = process.env.VUE_APP_BASE_URL_API
        await axios.post(BASE_URL + '/v1/loginRoutes/refreshToken')
        .then(response => {
            //console.log(response.data);
            const data = response.data.data;
            //console.log('es un token? ' + data.token)
            //axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;//Se almacena en memoria el new Token
            let newToken = data.token;
            app.config.globalProperties.$tokenGlobal = newToken;
            
        }) 
        .catch(error => {
            console.log(error);
        })
    }

    //var token = localStorage.getItem('token');
    if(token){
        
        await getNewToken();
        //console.log('Mi ruta:' + process.env.VUE_APP_BASE_URL_API)
    }

    app.use(router)
    //app.use(helper);
    app.use(VueAxios, axios)
    app.mount('#app')
    app.config.globalProperties.$baseUrlApi = process.env.VUE_APP_BASE_URL_API


//axios.defaults.baseURL = process.env.VUE_APP_BASE_URL_API
