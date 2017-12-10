/*
 * @Author: shixinghao 
 * @Date: 2017-12-09 21:54:00 
 * @Last Modified by: shixinghaoshixinghao
 * @Last Modified time: 2017-12-10 20:05:50
 */
import axios from 'axios';
import {
    SYSTEM
} from './global.js';
import {
    Indicator
} from 'mint-ui';

var instance = axios.create({
    baseURL: SYSTEM.BASE_URL,
    method: 'get',
    timeout: SYSTEM.TIMEOUT,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

// request拦截器
instance.interceptors.request.use(function (config) {
    // console.log(config);
    config.url = config.url + SYSTEM.PREFIX_URL;
    config.params = config.method === 'get' ? config.data : {};
    return config;
}, function (error) {
    return Promise.reject(error);
});

// response拦截器
instance.interceptors.response.use(function (response) {
    console.log(response.data);
    return response.data;
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
            }, 2000);
        })
        console.log(requestHttpArr);
        return await Promise.all(requestHttpArr);
    } else {
        console.log(requestArr);
        return await this.request(requestArr);
    }
}

/**
 * 同步请求
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
            }, 2000);
        })
        console.log(requestHttpArr);
        return requestHttpArr;
    } else {
        console.log(requestArr);
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