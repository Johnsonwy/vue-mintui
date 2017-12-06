import Vue from 'vue';
import Router from 'vue-router'

import App from '../App.vue';

import Tab from '../pages/tab/Tab.vue';
import Home from '../pages/tab/Home.vue';
import Trade from '../pages/tab/Trade.vue';
import Transaction from '../pages/tab/Transaction.vue';
import User from '../pages/tab/User.vue';

import Login from '../pages/user/Login';

Vue.use(Router);

const routes = [{
    path: '/',
    component: App,
    redirect: '/tab/home',
    children: [{
        path: 'tab',
        component: Tab,
        children: [{
            path: 'home',
            component: Home
        }, {
            path: 'trade',
            component: Trade
        }, {
            path: 'transaction',
            component: Transaction
        }, {
            path: 'user',
            component: User
        }]
    }, {
        path: 'user/login',
        component: Login
    }]
}];

export default new Router({
    routes
})