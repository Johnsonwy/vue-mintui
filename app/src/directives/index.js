/*
 * @Author: shixinghao 
 * @Date: 2017-12-12 10:24:56 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-29 16:39:17
 */
import Vue from 'vue';
import router from '../router';

/**
 * 页面跳转
 * <li v-go="'/active/center'"></li>
 */
Vue.directive('go', {
    bind: function (el, binding, vnode) {
        el.addEventListener('click', function () {
            // console.log(binding.value);
            vnode.context.$router.push(binding.value);
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
        const core_rspace = /\s+/;
        let setClass = " " + el.className + " ";
        if (binding.value >= 0) {
            setClass = setClass + 'color-red';
        } else {
            setClass = setClass + 'color-green';
        }
        el.className = setClass;
    }
})

/** 
 * 全屏高度
 * <div v-whole-screen>
 */
Vue.directive('whole-screen', {
    bind: function (el) {
        const screenHeight = window.innerHeight;
        el.style['min-height'] = screenHeight + 'px';
    }
})