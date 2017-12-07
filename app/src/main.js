import Vue from 'vue';
import Router from 'vue-router'
import router from './router';
import App from './App.vue';

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

new Vue({
    router
}).$mount('#app');