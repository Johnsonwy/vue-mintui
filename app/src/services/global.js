export const TEXT = {
    SERVER_ERROR: '服务器异常，请稍后再试',
    SERVER_NOFOUND: '服务器资源不存在',
    SERVER_NETWORK: '网络不可用',
    SERVER_BUSY: '服务器繁忙，请稍后再试'
}
export const BUSS = {
    PAGE_SIZE: 10,
    TRADE_LIST_TYPE: -1,
    TRADE_HISTORYLIST_TYPE: -2,
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
    user_getbalance_get: '/user/getbalance',
    trade_tradelist_post: '/trade/tradelist'
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
    href: '/tab/mytrade'
}, {
    id: 'user',
    name: '用户',
    href: '/tab/user'
}]