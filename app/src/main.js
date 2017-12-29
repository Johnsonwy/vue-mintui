import "./scss/style.scss";
import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
// 自定义组件
import VTabbar from './components/common/vv-tabbar.vue';
import VTabItem from './components/common/vv-tab-item.vue';
import VHeaderBack from './components/common/vv-header-back.vue';
// 全局模块
import httpService from './services/httpService';
import './directives';
import './filters';
// minu-ti
import {
    Navbar,
    Header,
    Button,
    Swipe,
    SwipeItem,
    Spinner,
    Cell,
    CellSwipe,
    Toast,
    Loadmore,
    TabItem,
    Popup
} from 'mint-ui';

Vue.use(httpService);
Vue.component(VTabbar.name, VTabbar);
Vue.component(VTabItem.name, VTabItem);
Vue.component(VHeaderBack.name, VHeaderBack);

Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);
Vue.component(Spinner.name, Spinner);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Popup.name, Popup);

new Vue({
    router,
    store
}).$mount('#app');