/*
 * @Author: shixinghao 
 * @Date: 2017-12-08 22:43:05 
 * @Last Modified by: shixinghaoshixinghao
 * @Last Modified time: 2017-12-08 23:16:53
 */
const UtilService = {
    getHeightByDeviceWidth: () => {
        const width = window.screen.width;
        const ratio = 375 / 150;
        return Math.round(width / ratio) + 'px';
    }
}

export {
    UtilService
};