import Vue from 'vue';
import numeral from 'numeral';

Vue.filter('strToArr', function (value) {
    if (!value) {
        return '';
    } else {
        return value.split(',');
    }
})

Vue.filter('getArrItem', function (value, index) {
    if (!value && value !== 0) {
        return '';
    } else {
        return value[index];
    }
})

Vue.filter('getArrMaxItem', function (value) {
    if (!value) {
        return '';
    } else {
        let arr = value.split(',');
        return arr[arr.length - 1];
    }
})

Vue.filter('number', function (value, format) {
    if (!value) {
        return 0.00;
    } else {
        return numeral(value).format(format);
    }
})