import Vue from 'vue';
import Router from 'vue-router'

import App from './App.vue';

import Home from './pages/Home.vue';

import {
    Tabbar,
    TabItem,
    Navbar,
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

const router = new Router({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    }]
});

new Vue({
    // el: '#app',
    template: '<App></App>',
    router,
    components: {
        App
    }
}).$mount('#app');