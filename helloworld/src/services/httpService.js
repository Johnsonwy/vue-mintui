import axios from 'axios';

var instance = axios.create({
    baseURL: 'http://bg.9niu.com/api/',
    method: 'post',
    timeout: 1000
});

export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, "$http", {
            value: instance
        });
    }
};