<template>
    <div class="container">Desde Users</div>
    <div v-if="errorData != ''">
        Error: {{ errorData }}
    </div>
    <div v-else>
        {{ users }}
    </div>
</template>

<script>
import { getNewToken } from "../helper/auth"


    export default {
        name: 'Users',
        data(){
            return {
                users: [],
                errorData: '',
                myToken:'',
            }
        },
        async mounted(){
            const newToken = await getNewToken();
            this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
            await this.axios.get(this.$baseUrlApi + '/v1/usuRoutes/647bc0f33e27f2f7d4a2ad47')
            .then(response => {
                if(response.data.status === 'Failed'){
                    this.errorData = response.data.data.error;
                }

                this.users = response.data;
            })

            .catch(error => {
                    console.log(error);
            })
        },
    }
</script>