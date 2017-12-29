/*
 * @Author: shixinghao 
 * @Date: 2017-12-09 21:54:00 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-28 18:29:06
 */
import axios from 'axios';
import qs from 'qs';
import {
    utilService
} from './utilService.js';

import {
    SYSTEM,
    API
} from './global.js';
import {
    Indicator
} from 'mint-ui';

var instance = axios.create({
    baseURL: SYSTEM.BASE_URL,
    method: 'get',
    timeout: SYSTEM.TIMEOUT,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

// request拦截器
instance.interceptors.request.use(function (config) {
    config.url = config.url + (config.prefix ? config.prefix : SYSTEM.PREFIX_URL);
    // 资讯接口
    if (config.prefix && config.prefix === SYSTEM.PREFIX_URL_NEW) {
        config.headers = {};
    } else {
        config.headers['token'] = utilService.getLocalStorage('token');
        if (config.method !== 'post') {
            config.params = config.data;
        }
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// response拦截器
instance.interceptors.response.use(function (response) {
    // java || cms
    if (response.data.status == 'true' || response.data.success || !(response.data.status == 'true' || response.data.success) && !response.data.respCode) {
        return response.data;
    } else if (response.data.respCode) {
        console.log(response.data);
        return Promise.reject(new Error(response.data.respMessage || API.TEXT.CMS_SERVER_ERROR));
    } else {
        return Promise.reject(new Error(response.data.resultMsg));
    }
}, function (error) {
    return Promise.reject(error);
});

/**
 * 异步请求
 * @param {*请求配置，同axios} requestArr 
 */
instance.asyncAjax = async function (requestArr) {
    Indicator.open();
    if (requestArr instanceof Array) {
        let requestHttpArr = [];
        for (let key in requestArr) {
            requestHttpArr[key] = this.request(requestArr[key]);
        }
        requestHttpArr[requestArr.length] = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('request done! ');
            }, 500);
        })
        return new Promise((resolve, reject) => {
            const promiseMap = Promise.all(requestHttpArr);
            let promiseResults = [];
            Promise.all(requestHttpArr).then((data) => {
                for (var index in data) {
                    promiseResults.push(data[index]);
                }
                // 关闭loading
                utilService.closeLoading();
                resolve(promiseResults);
            }, (error) => {
                utilService.closeLoading();
                reject(error);
            })
        });
    } else {
        return new Promise((resolve, reject) => {
            const promise = this.request(requestArr);
            promise.then(data => {
                utilService.closeLoading();
                resolve(data);
            }, error => {
                utilService.closeLoading();
                reject(error);
            })
        })
        // return await this.request(requestArr)
    }
}

/**
 * 同步请求 TODO：请求参数配置
 * @param {*请求配置，同axios} requestArr 
 */
instance.syncAjax = async function (requestArr) {
    Indicator.open();
    if (requestArr instanceof Array) {
        let requestHttpArr = [];
        for (let key in requestArr) {
            requestHttpArr[key] = await this.request(requestArr[key]);
        }
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('request done! ');
            }, 3000);
        })
        // console.log(requestHttpArr);
        return requestHttpArr;
    } else {
        // console.log(requestArr);
        return await this.request(requestArr);
    }
}

export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, "$http", {
            value: instance
        });
    }
};