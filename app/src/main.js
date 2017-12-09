import "./scss/style.scss";
import Vue from 'vue';
import Router from 'vue-router'
import router from './router';
import App from './App.vue';

import VTabbar from './components/common/vv-tabbar.vue';
import VTabItem from './components/common/vv-tab-item.vue';

import {
    Navbar,
    Header,
    Button,
    Swipe,
    SwipeItem
} from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
Vue.component(VTabbar.name, VTabbar);
Vue.component(VTabItem.name, VTabItem);

new Vue({
    router
}).$mount('#app');