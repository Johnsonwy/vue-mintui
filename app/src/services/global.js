export const TEXT = {
    SERVER_ERROR: '服务器异常，请稍后再试',
    SERVER_NOFOUND: '服务器资源不存在'
}
export const SYSTEM = {
    TIMEOUT: 6000,
    HOSTNAME: 'http://m.9fanfanf.com',
    BASE_URL: '/',
    PREFIX_URL: '.api',
    TOAST_TIMEOUT: 2500,
    HTTP_STATUS: {
        SERVER_NOFOUND: 404,
        SERVER_ERROR: 500
    }
}
export const API = {
    product_show_get: '/product/show',
    user_getbalance_get: 'user/getbalance',
}
export const tabs = [{
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