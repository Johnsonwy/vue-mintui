/*
 * @Author: shixinghao 
 * @Date: 2017-12-25 16:55:06 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-28 12:25:16
 */
import Vue from 'vue';
import Router from 'vue-router'

import App from '../App.vue';
import Tab from '../pages/tab/TabPage.vue';
import Home from '../pages/home/Home.vue';
import Trade from '../pages/trade/Trade.vue';
import MyTrade from '../pages/trade/MyTrade.vue';
import User from '../pages/user/User.vue';
import TradeList from '../pages/trade/list/TradeList.vue';
import TradeHistoryList from '../pages/trade/list/TradeHistoryList.vue';

const TradeDetail = () => require.ensure([], () => require('../pages/trade/detail/TradeDetail.vue'), 'TradeDetail');

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
            path: 'mytrade',
            component: MyTrade,
            children: [{
                path: '',
                redirect: 'list'
            }, {
                path: 'list',
                component: TradeList
            }, {
                path: 'historylist',
                component: TradeHistoryList
            }]
        }, {
            path: 'user',
            component: User
        }]
    }, {
        path: 'trade/detail',
        component: TradeDetail
    }]
}];

export default new Router({
    routes
})