/*
 * @Author: shixinghao 
 * @Date: 2017-12-26 14:55:54 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-28 16:41:02
 */
// 文案
export const TEXT = {
    SERVER_ERROR: '服务器异常，请稍后再试',
    SERVER_NOFOUND: '服务器资源不存在',
    SERVER_NETWORK: '网络不可用',
    SERVER_BUSY: '服务器繁忙，请稍后再试',
    CMS_SERVER_ERROR: 'CMS服务器异常，请稍后再试'
}
// 业务变量
export const BUSS = {
    PAGE_SIZE: 10,
    TRADE_LIST_TYPE: -1,
    TRADE_HISTORYLIST_TYPE: -2,
    CMS_INDEX_ADSID: 58
}
// 系统配置
export const SYSTEM = {
    TIMEOUT: 6000,
    HOSTNAME: 'http://m.9fanfanf.com',
    BASE_URL: '/',
    PREFIX_URL: '.api',
    PREFIX_URL_NEW: '.cms',
    TOAST_TIMEOUT: 2500,
    HTTP_STATUS: {
        SERVER_NOFOUND: 404,
        SERVER_ERROR: 500
    }
}
/**
 * api接口
 * 接口名后缀已方法结尾，便于参数控制
 */
export const API = {
    cms_getbanner_post: '/cmsmanager/cms/advertising/findByAdspaceId',
    product_show_get: '/product/show',
    user_getbalance_get: '/user/getbalance',
    trade_tradelist_post: '/trade/tradelist',
    trade_tradeinfo_post: '/trade/gettradeinfo',
    tradeclient_queryAccount_post: '/tradeclient/queryAccount'
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

export const MINUTI = {
    toastInstance: false
}