import {createWebHistory, createRouter } from "vue-router";
import store from "@/components/TheStore.vue";
import about from "@/components/about.vue";
import cart from "@/components/cart.vue";
import login from "@/components/login.vue";
import profile from "@/components/profile.vue";
import editprofile from "@/components/editprofile.vue";
import registration from "@/components/registration.vue";
import checkout  from "@/components/checkout.vue";

const routes = [
    {
        path: '/',
        name: 'store',
        component: store,
    },
    {
        path: '/about',
        name: 'about',
        component: about,

    },
    {
        path : '/cart',
        name : 'cart',
        component : cart
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/editprofile',
        name: 'editprofile',
        component : editprofile
    },
    {
        path: '/registration',
        name: 'registration',
        component: registration
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: checkout
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;

