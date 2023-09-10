import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Users from '../views/Users.vue';
import Home from '../views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;