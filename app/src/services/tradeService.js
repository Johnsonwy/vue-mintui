import Vue from 'vue';
import {
    API
} from './global';

export const tradeService = {
    getTradeDetail: function (tradeId) {
        return this.$http.asyncAjax({
            url: API.trade_tradeinfo_post,
            data: {
                transId: tradeId
            },
            method: 'post'
        })
    }
}