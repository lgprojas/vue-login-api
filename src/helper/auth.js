import axios from 'axios';
import router from '../router/index'
import { reactive, toRef } from "vue";


const estado = reactive({ isAuth: false })

export const isAuth = toRef(estado, 'isAuth')

export default {

        isAuthenticated(){
            //console.log('ingresa a isAuthenticated')
            //const token = this.$newToken;
            let refreshToken = null
            refreshToken = localStorage.getItem('token');  
            // console.log('mi refreshToken: ' + refreshToken)
            const estado = reactive({ isAuth: false })
            //const isAuth = toRef( estado, 'isAuth' )

                 if(!refreshToken){
                    isAuth.value = false
                 }else{
                    isAuth.value = true
                 }
                 console.log('isAuthenticated: '+ isAuth.value)
                 return isAuth.value
        },

        saveSession(userInfo){

            console.log('dentro de saveUser:')
            console.log(userInfo)
            localStorage.setItem('token', userInfo.refreshToken);
            this.isAuthenticated();
            this.getMyNewBearer(userInfo.token)
            
            //aquí guardar isAUthenticate = true                            
            
            //Vue.prototype.$tokenGlobaldos = userInfo.token;
            //console.log('Mi token global es:' + this.$tokenGlobaldos)
            //next();
        },

        getMyNewBearer(myToken){
            if(myToken){
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + myToken;
            }else{
                console.log('mi token global es: ' + this.$newToken)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$newToken;
            }
    
        },

        async getNewToken(){
            //console.log('dentro de getNewToken')
            const token = localStorage.getItem('token');

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            const BASE_URL = process.env.VUE_APP_BASE_URL_API

            const res = await axios.post(BASE_URL + '/v1/loginRoutes/refreshToken')
                .then(response => {
                //     //console.log(response.data);
                    const data = response.data.data;

                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;//Se almacena en memoria el new Token
                    let newToken = data.token;
                //     //app.config.globalProperties.$tokenGlobal = newToken;  
                    return newToken              
                }) 
                .catch(error => {
                    console.log(error);
                })

            return res
        },

        logout(){
            localStorage.removeItem('token')
            router.push('/login');
        }
    }
