import axios from 'axios';

export async function getNewToken(){
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
        }
