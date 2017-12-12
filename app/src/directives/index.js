/*
 * @Author: shixinghao 
 * @Date: 2017-12-12 10:24:56 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-12 10:25:26
 */
import Vue from 'vue';
import router from '../router';

/**
 * 页面跳转
 * <li v-go="'/active/center'"></li>
 */
Vue.directive('go', {
    bind: function (el, binding) {
        el.addEventListener('click', function () {
            router.push(binding.value);
            // window.location.href = binding.value || '/';
        })
    }
});

/**
 * 正负红绿样式
 * <span v-red-green="value">
 */
Vue.directive('red-green', {
    bind: function (el, binding) {
        if (binding.value >= 0) {
            el.setAttribute('class', 'color-red');
        } else {
            el.setAttribute('class', 'color-green');
        }
    }
})