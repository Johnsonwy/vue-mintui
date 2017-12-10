import "./scss/style.scss";
import Vue from 'vue';
import Router from 'vue-router'
import router from './router';
import App from './App.vue';
import httpService from './services/httpService';
import VTabbar from './components/common/vv-tabbar.vue';
import VTabItem from './components/common/vv-tab-item.vue';
import VHeaderBack from './components/common/vv-header-back.vue';
import './directives';
import {
    Navbar,
    Header,
    Button,
    Swipe,
    SwipeItem,
    Toast,
    Loadmore
} from 'mint-ui';

Vue.use(httpService);
Vue.component(Navbar.name, Navbar);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Loadmore.name, Loadmore);
Vue.component(VTabbar.name, VTabbar);
Vue.component(VTabItem.name, VTabItem);
Vue.component(VHeaderBack.name, VHeaderBack);

new Vue({
    router
}).$mount('#app');