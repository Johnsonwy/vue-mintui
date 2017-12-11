/*
 * @Author: shixinghao 
 * @Date: 2017-12-08 22:43:05 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-11 10:57:37
 */
import Vue from 'vue';
import {
    Indicator,
    Toast
} from 'mint-ui';
import {
    SYSTEM,
    TEXT
} from './global.js';

export const utilService = {
    // 根据设备宽度换算高度
    getHeightByDeviceWidth: () => {
        const width = window.screen.width;
        const ratio = 375 / 150;
        return Math.round(width / ratio) + 'px';
    },
    // 关闭mint loading
    closeLoading: () => {
        Indicator.close();
    },
    // 显示mint 提示框toast
    showToast: (resultMsg) => {
        Toast({
            message: resultMsg,
            position: 'middle',
            duration: SYSTEM.TOAST_TIMEOUT
        });
    },
    // 初始化加载mint infinite scroll
    initScroll: function (refs) {
        if (refs && refs.loadmore) {
            refs.loadmore.onTopLoaded();
        }
    },
    // 错误信息 处理
    showError: function (error) {
        if (error.response && error.response.status === SYSTEM.HTTP_STATUS.SERVER_NOFOUND) {
            this.showToast(TEXT.SERVER_NOFOUND);
        } else if (error.response && error.response.status === SYSTEM.HTTP_STATUS.SERVER_ERROR) {
            this.showToast(TEXT.SERVER_ERROR);
        } else if (error.message.toLocaleLowerCase().indexOf('network') != -1) {
            this.showToast(TEXT.SERVER_NETWORK);
        } else if (error.message.indexOf('timeout') != -1) {
            this.showToast(TEXT.SERVER_BUSY);
        } else {
            this.showToast(error.message || TEXT.SERVER_ERROR);
        }

    },
    // 保存信息
    setLocalStorage: function (key, value) {
        window.localStorage.setItem(key, value);
    },
    getLocalStorage: function (key) {
        return window.localStorage.getItem(key);
    }
}