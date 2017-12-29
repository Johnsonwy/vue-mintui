<template>
    <div class="trade-history-list" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore class="loadmore-bottom" :top-method="loadTop" ref="loadmore" topDropText="正在加载数据" :bottom-all-loaded="allLoaded" :bottom-method="loadBottom">
            <div class="trade-list-item" v-for="(trade,index) in tradeList" :key="trade.id" :class="{'border-green':totalTradeList[index] - trade.wfPercent<0}">
                <div class="item-title-wrap">
                    <span class="title-name">{{trade.product.productName}}</span>
                    <span class="title-status">操盘中</span>
                    <span class="title-date">{{trade.firstTradeDate|date}} 至 {{trade.realEndDate|date}}
                        <i class="icon icon-more1"></i>
                    </span>
                </div>
                <div class="item-content-wrap">
                    <ul class="line clearfix">
                        <li>
                            <span>操盘资金</span>
                            <span class="color-black">{{trade.wfPercent|number('0.00')}}</span>
                        </li>
                        <li>
                            <span>风险保证金</span>
                            <span class="color-black">{{trade.capitalAmount|number('0.00')}}</span>
                        </li>
                    </ul>
                    <div>
                        <span>累计盈亏</span>
                        <span v-red-green="totalTradeList[index] - trade.wfPercent">{{(totalTradeList[index] - trade.wfPercent)|number('0.00')}} ({{(totalTradeList[index] - trade.wfPercent)|profitHistoryPercent(trade.capitalAmount)|number('0.00')|operator}}%)</span>
                    </div>
                </div>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
import { API, BUSS } from '../../../services/global';
import { utilService } from '../../../services/utilService';
import { bussService } from '../../../services/bussService';
export default {
    name: 'trade-list',
    data () {
        return {
            tradeListForm: {
                page: 1,
                pageSize: BUSS.PAGE_SIZE,
                type: BUSS.TRADE_HISTORYLIST_TYPE
            },
            allLoaded: false,//true 不加载
            tradeList: [],
            wrapperHeight: 0
        }
    },
    methods: {
        getTradeList: function () {
            return this.$http.syncAjax({
                url: API.trade_tradelist_post,
                data: this.tradeListForm,
                method: 'post'
            })
        },
        loadTop: function () {
            this.tradeListForm.page = 1;
            this.tradeList = [];
            this.getTradeList().then((data) => {
                this.$refs.loadmore.onTopLoaded();
                this.tradeList = this.tradeList.concat(data.tradeList.resultList);
                utilService.closeLoading();
            }).catch(error => {
                his.$refs.loadmore.onTopLoaded();
                utilService.closeLoading();
                utilService.showError(error);
            });
        },
        loadBottom: function () {
            this.allLoaded = true;
            this.getTradeList().then((data) => {
                if (data.tradeList.totalPage < this.tradeListForm.page) {
                    this.allLoaded = true;
                } else {
                    this.allLoaded = false;
                    this.tradeListForm.page++;
                    this.tradeList = this.tradeList.concat(data.tradeList.resultList);
                }
                utilService.initScroll(this.$refs, 'loadmore', this.tradeListForm.page);
                utilService.closeLoading();
            }).catch(error => {
                this.allLoaded = true;
                utilService.initScroll(this.$refs, 'loadmore', this.tradeListForm.page);
                utilService.closeLoading();
                utilService.showError(error);
            });
        }
    },
    computed: {
        totalTradeList: function () {
            let totalTradeList = [];
            for (let i = 0; i < this.tradeList.length; i++) {
                totalTradeList[i] = bussService.getTotalTrade(this.tradeList[i]);
            }
            return totalTradeList;
        }
    },
    created () {
        // this.loadBottom();
    },
    mounted () {
        this.wrapperHeight = utilService.setLoadmoreHeight(this.$refs);
    }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/common/variables";
@import "../../../scss/trade/_list.scss";
.trade-history-list {
  @extend .trade-list;
  .trade-list-item {
    border-right: 0.3rem solid $color-red;
    &.border-green {
      border-right: 0.3rem solid $color-green;
    }
  }
}
</style>