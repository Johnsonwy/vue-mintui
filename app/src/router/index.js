import Vue from 'vue';
import Router from 'vue-router'

import App from '../App.vue';

const Tab = () => require.ensure([], () => require('../pages/tab/TabPage.vue'), 'Tab');
const Home = () => require.ensure([], () => require('../pages/home/HomePage.vue'), 'Home');
const Trade = () => require.ensure([], () => require('../pages/trade/Trade.vue'), 'Trade');
const Transaction = () => require.ensure([], () => require('../pages/transaction/Transaction.vue'), 'Transaction');
const User = () => require.ensure([], () => require('../pages/user/User.vue'), 'User');
const Login = () => require.ensure([], () => require('../pages/user/Login'), 'Login');

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