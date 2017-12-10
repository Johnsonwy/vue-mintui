/*
 * @Author: shixinghao 
 * @Date: 2017-12-08 22:43:05 
 * @Last Modified by: shixinghaoshixinghao
 * @Last Modified time: 2017-12-09 22:58:30
 */
import Vue from 'vue';
import {
    Indicator,
    Toast
} from 'mint-ui';
import {
    SYSTEM
} from '../global/variables.js';

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
    showToast: (resultMsg) => {
        Toast({
            message: resultMsg,
            position: 'middle',
            duration: SYSTEM.TOAST_TIMEOUT
        });
    }
}