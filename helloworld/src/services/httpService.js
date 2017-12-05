import axios from 'axios';
import {
    Indicator
} from 'mint-ui';

var instance = axios.create({
    baseURL: '/',
    method: 'get',
    timeout: 1000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('interceptors');
    console.log(config);
    // Indicator.open();
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    // Do something with response data
    // Indicator.close();
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, "$http", {
            value: instance
        });
    }
};