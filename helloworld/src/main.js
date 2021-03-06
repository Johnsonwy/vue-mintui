// css
import './scss/index.scss';
import './scss/aminate.scss';

import Vue from 'vue';

import Router from 'vue-router'
import App from './App.vue';

import store from './store/store.js';
// Tabs
import Tabs from './components/Tabs/Tabs.vue';
import Home from './components/Tabs/Home.vue';
import Transition from './components/Tabs/Transition.vue';

// Pages
import Page from './components/Pages/Page.vue';
// import ActivityCenter from './components/Pages/Home/ActivityCenter.vue';
// const ActivityCenter = function (r) {
//     console.log(r);
//     return require.ensure([], function (require) {
//         return r(require('./components/Pages/Home/ActivityCenter.vue'))
//     }, 'ActivityCenter')
// }
const ActivityCenter = () => require.ensure([], () => require('./components/Pages/Home/ActivityCenter.vue'), 'ActivtyCenter');
// const ActivityCenter = () => {
//     return import ('./components/Pages/Home/ActivityCenter.vue');
// }
import Free from './components/Pages/Home/Free.vue';
import Trade from './components/Pages/Trade.vue';
import CurrentList from './components/Pages/Transition/CurrentList.vue';
import HistoryList from './components/Pages/Transition/HistoryList.vue';

import Http from './services/httpService';
import {
    Tabbar,
    TabItem,
    Navbar,
    TabItem,
    Header,
    Button
} from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

Vue.use(Router);
Vue.use(Http);

const router = new Router({
    routes: [{
        path: '/',
        redirect: '/tabs/home'
    }, {
        path: '/tabs',
        component: Tabs,
        children: [{
            path: 'home',
            component: Home
        }, {
            path: 'trade',
            component: Trade,
            meta: {
                hideTab: true
            }
        }, {
            path: 'transition',
            component: Transition,
            children: [{
                path: '',
                redirect: '/tabs/transition/currentList'
            }, {
                path: 'currentList',
                component: CurrentList
            }, {
                path: 'historyList',
                component: HistoryList
            }]
        }]
    }, {
        path: '/page',
        component: Page,
        children: [{
            path: 'home/free/:id',
            component: Free
        }, {
            path: 'home/activity',
            component: ActivityCenter
        }]
    }]
});

router.beforeEach((to, from, next) => {
    console.log(to.meta);
    next();
})
new Vue({
    // el: '#app',
    template: '<App></App>',
    router,
    components: {
        App
    },
    store
}).$mount('#app');