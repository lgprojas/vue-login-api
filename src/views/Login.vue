<template>
    <div class='container'>
        <h3>Login {{ $baseUrlApi }} and {{ API_URL }}</h3>
        <div class=''>

          <form class='form' @submit.prevent="iniciarSesion">
            <div class='col-4 form-group p-2'>
              <label>Usuario:</label>
              <input type='text' v-model="usuario" class='form-control'/>
            </div>
            <div class='col-4 form-group p-2'>
              <label>Password:</label>
              <input type='password' v-model="clave" class='form-control'/>
            </div>
            <div class='col-4 form-group p-2'>
              <button class='btn btn-primary'>Entrar</button>
            </div>
          </form>
        </div>
      </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                usuario: '',
                clave: '',
                API_URL: this.$baseUrlApi
            }
        },
        methods: {
            
            async iniciarSesion(){
               var payload = {
                    usuario: this.usuario,
                    clave: this.clave,
                };
                 await this.axios.post(this.API_URL + '/v1/loginRoutes', payload)
                 .then(response => {
                    //console.log(response.data);
                    const data = response.data.data;
                    console.log(data)
                    this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;

                    localStorage.setItem('token', data.refreshToken)
                    this.$router.push('/');
                })
                .catch(error => {
                    const data = error.response.data;
                    console.log(data.message);
                })
            }
        }
    }
</script>