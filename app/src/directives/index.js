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