<template>
  <header>
            <nav class='navbar navbar-expand-lg navbar-light bg-light'>
                <div class="container-fluid container">
                    
                    <a class="navbar-brand" href="#">Vue 3</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li class='nav-item'>
                                <router-link to="/home" class='nav-link'>Home</router-link>
                            </li>
                            <li class='nav-item'>
                                <router-link to="/users" class='nav-link'>Users</router-link>
                            </li>
                        </ul>
                        <div class="dropdown">
                        <ul class="navbar-nav ms-auto">
                          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Acceder
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><router-link to="/login" class='dropdown-item'>Iniciar sesión</router-link></li>
                            <li><router-link to="/signup" class='dropdown-item'>Registrarse</router-link></li>
                          </ul>
                        </ul> 
                    </div>
                    </div>                    
                </div>
            </nav>
        </header>

        <div class="container">
           <router-view></router-view>
        </div>
</template>


<script>
  export default {
    name: 'App',
  }
</script>