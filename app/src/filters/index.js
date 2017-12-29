/*
 * @Author: shixinghao 
 * @Date: 2017-12-12 09:31:44 
 * @Last Modified by: shixinghao
 * @Last Modified time: 2017-12-28 15:03:31
 */
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

// 数字格式化
Vue.filter('number', function (value, format) {
    return numeral(value).format(format);
})

// 日期格式化 2017-12-28 15:02:50 => 2017.12.28
Vue.filter('date', function (value) {
    if (!value) {
        return '';
    } else {
        return value.split(' ')[0].replace(/-/g, '.');
    }
})

// 累计盈亏
Vue.filter('profit', function (trade) {
    if (!trade) {
        return 0;
    } else {
        return (trade.currPercent.assetValue || trade.wfCurrPercent || trade.wfPercent) - trade.wfPercent;
    }
})

// 累计盈亏百分比-历史
Vue.filter('profitHistoryPercent', function (profit, capitalAmount) {
    // 现金=0
    if (!capitalAmount) {
        if (profit <= 0) {
            return 0;
        } else {
            return 100;
        }
    } else {
        return profit / capitalAmount * 100;
    }
})

Vue.filter('operator', function (value) {
    if (!value) {
        return 0.00;
    } else if (value > 0) {
        return '+' + value;
    } else {
        return value;
    }
})