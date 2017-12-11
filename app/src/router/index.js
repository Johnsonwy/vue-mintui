import Vue from 'vue';
import Router from 'vue-router'

import App from '../App.vue';

import Tab from '../pages/tab/TabPage.vue';
import Home from '../pages/home/HomeTab.vue';
import Trade from '../pages/trade/TradeTab.vue';
import MyTrade from '../pages/trade/my-trade/MyTradeTab.vue';
import User from '../pages/user/User.vue';

const TradeList = () => require.ensure([], () => require('../pages/trade/my-trade/TradeList.vue'), 'TradeList');
const TradeHistoryList = () => require.ensure([], () => require('../pages/trade/my-trade/TradeHistoryList.vue'), 'TradeHistoryList');
const TradeDetail = () => require.ensure([], () => require('../pages/trade/my-trade/TradeDetail.vue'), 'TradeDetail');
const TradeHistoryDetail = () => require.ensure([], () => require('../pages/trade/my-trade/TradeHistoryDetail.vue'), 'TradeHistoryDetail');

const TradeClient = () => require.ensure([], () => require('../pages/trade/trade-client/TradeClient.vue'), 'TradeClient');
const TradePosition = () => require.ensure([], () => require('../pages/trade/trade-client/TradePosition.vue'), 'TradePosition');
const TradeCancel = () => require.ensure([], () => require('../pages/trade/trade-client/TradeCancel.vue'), 'TradeCancel');
const Transaction = () => require.ensure([], () => require('../pages/trade/trade-client/Transaction.vue'), 'Transaction');
const TradeQuery = () => require.ensure([], () => require('../pages/trade/trade-client/trade-query/TradeQuery.vue'), 'TradeQuery');

const UserLogin = () => require.ensure([], () => require('../pages/user/UserLogin'), 'UserLogin');
const UserForgetpwd = () => require.ensure([], () => require('../pages/user/UserForgetpwd'), 'UserForgetpwd');
const UserRegist = () => require.ensure([], () => require('../pages/user/UserRegist'), 'UserRegist');
const UserRecharge = () => require.ensure([], () => require('../pages/user/UserRecharge'), 'UserRecharge');
const UserDrawing = () => require.ensure([], () => require('../pages/user/UserDrawing'), 'UserDrawing');
const UserCoupon = () => require.ensure([], () => require('../pages/user/UserCoupon'), 'UserCoupon');
const UserFound = () => require.ensure([], () => require('../pages/user/UserFound'), 'UserFound');
const UserAbout = () => require.ensure([], () => require('../pages/user/UserAbout'), 'UserAbout');
const UserMessage = () => require.ensure([], () => require('../pages/user/UserMessage'), 'UserMessage');
const UserHelp = () => require.ensure([], () => require('../pages/user/UserHelp'), 'UserHelp');
const ActiveCenter = () => require.ensure([], () => require('../pages/active/ActiveCenter'), 'ActiveCenter');
const ApplyTrade = () => require.ensure([], () => require('../pages/trade/ApplyTrade.vue'), 'ApplyTrade');
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
                redirect: 'list',
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
        path: 'user/login',
        component: UserLogin
    }, {
        path: 'user/forgetpwd',
        component: UserForgetpwd
    }, {
        path: 'user/regist',
        component: UserRegist
    }, {
        path: 'user/recharge',
        component: UserRecharge
    }, {
        path: 'user/drawing',
        component: UserDrawing
    }, {
        path: 'user/coupon',
        component: UserCoupon
    }, {
        path: 'user/found',
        component: UserFound
    }, {
        path: 'user/about',
        component: UserAbout
    }, {
        path: 'user/message',
        component: UserMessage
    }, {
        path: 'user/help',
        component: UserHelp
    }, {
        path: 'active/center',
        component: ActiveCenter
    }, {
        path: 'trade/applytrade',
        component: ApplyTrade
    }, {
        path: 'mytrade/detail',
        component: TradeDetail
    }, {
        path: 'mytrade/historydetail',
        component: TradeHistoryDetail
    }, {
        path: 'tradeclient',
        component: TradeClient,
        children: [{
            path: '/',
            redirect: '/tradeclient/position',
        }, {
            path: 'position',
            component: TradePosition,
        }, {
            path: 'cancel',
            component: TradeCancel,
        }, {
            path: 'transaction',
            component: Transaction,
        }, {
            path: 'query',
            component: TradeQuery
        }]
    }]
}];

export default new Router({
    routes
})