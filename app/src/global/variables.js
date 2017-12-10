export default {
    tabs: [{
        id: 'home',
        name: '首页',
        href: '/tab/home'
    }, {
        id: 'trade',
        name: '配资',
        href: '/tab/trade'
    }, {
        id: 'transaction',
        name: '交易',
        href: '/tab/transaction'
    }, {
        id: 'user',
        name: '用户',
        href: '/tab/user'
    }]
}
export const SYSTEM = {
    TIMEOUT: 6000,
    HOSTNAME: 'http://m.9fanfanf.com',
    BASE_URL: '/',
    PREFIX_URL: '.api',
    TOAST_TIMEOUT: 3000
}
export const API = {
    product_show_get: '/product/show',
    user_getbalance_get: 'user/getbalance',
}