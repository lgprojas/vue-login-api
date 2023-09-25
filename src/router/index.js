import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Users from '../views/Users.vue';
import Home from '../views/Home.vue';

import auth from "../helper/auth"


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {
            requireAuth: true
            //role: 'admin'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

//validar rutas
router.beforeEach((to, from, next) => {
    console.log('controlando beforeEach')
    const authToken = auth.isAuthenticated();
    //const authStore = useAuthStore();//sesion con pinia
    //const publicPages = ['/login', '/signup']
    const needAuth = to.meta.requireAuth;

    if(needAuth && !authToken){
        router.push({ path: '/login' });
    }else{
        next()
    }
})

export default router;