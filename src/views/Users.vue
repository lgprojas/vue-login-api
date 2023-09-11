<template>
    <div class="container">Desde Users</div>
    {{ users }}
</template>

<script>
    export default {
        name: 'Users',
        async mounted(){
            await this.axios.get(this.$baseUrlApi + '/v1/usuRoutes/')
            .then(response => {
                this.users = response.data;
            })
        },
        data(){
            return {
                users: []
            }
        }
    }
</script>