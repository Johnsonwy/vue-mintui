/*
 * @Author: shixinghao 
 * @Date: 2017-12-08 22:43:05 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-27 14:44:34
 */
import Vue from 'vue';
import {
    Indicator,
    Toast
} from 'mint-ui';
import {
    token
} from '../mock/token.js';
import {
    SYSTEM,
    TEXT,
    MINUTI
} from './global.js';

export const utilService = {
    // 根据设备宽度换算高度
    getHeightByDeviceWidth: () => {
        const width = window.screen.width;
        const ratio = 577 / 331;
        return Math.round(width / ratio) + 'px';
    },
    // mint loading 关闭
    closeLoading: () => {
        Indicator.close();
    },
    // mint toast 显示提示框toast
    showToast: (options) => {
        if (MINUTI.toastInstance) {
            MINUTI.toastInstance.close();
        }
        MINUTI.toastInstance = Toast({
            message: typeof options === 'string' ? options : options.message,
            position: options.position || 'middle',
            duration: options.duration || SYSTEM.TOAST_TIMEOUT
        });
        // console.log(MINUTI.toastInstance.closed);
    },
    // mint toast 错误信息 处理
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
    // minuti loadmore 设置view高度
    setLoadmoreHeight: function ($refs) {
        return document.documentElement.clientHeight - $refs.wrapper.getBoundingClientRect().top - 60;
    },
    /**
     * mint infinite scroll
     * type:loadmore上拉加载,refresh下拉刷新
     */
    initScroll: function (refs, type, page) {
        if (type && type == 'loadmore') {
            refs.loadmore.onBottomLoaded();
            if (page && page == 2) {
                Vue.nextTick(() => {
                    window.scrollTo(0, 0);
                })
            }
        } else {
            refs.loadmore.onTopLoaded();
        }
    },
    // 保存信息
    setLocalStorage: function (key, value) {
        window.localStorage.setItem(key, value);
    },
    getLocalStorage: function (key) {
        this.setLocalStorage('token', token);
        return window.localStorage.getItem(key);
    }
}