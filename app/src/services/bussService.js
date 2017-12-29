/*
 * @Author: shixinghao 
 * @Date: 2017-12-27 16:27:38 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-27 16:38:06
 */
import {
    utilService
} from './utilService';
import store from '../store';
export const bussService = {
    // 获取总操盘资金，用于当前操盘计算盈利等
    getTotalTrade: function (trade) {
        if (!trade) {
            return 0;
        } else {
            return (trade.currPercent.assetValue || trade.wfCurrPercent || trade.wfPercent);
        }
    },
    // 校验本地登录状态
    checkIsLogin: function () {
        store.commit('isLogin', utilService.getLocalStorage('token') ? true : false);
        return store.state.isLogin;
    }
}