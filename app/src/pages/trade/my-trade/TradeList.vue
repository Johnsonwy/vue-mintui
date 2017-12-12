<template>
    <div class="trade-list" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore style="margin-bottom:60px" :top-method="loadTop" ref="loadmore" topDropText="正在加载数据" :bottom-all-loaded="allLoaded" :bottom-method="loadBottom">
            <div class="trade-list-item" v-for="(trade,index) in tradeList" :key="trade.id">
                <div class="item-title-wrap">
                    <span class="title-name">{{trade.product.productName}}</span>
                    <span class="title-status">操盘中</span>
                    <span class="title-date">2017-12-11 至 2017-12-11</span>
                </div>
                <div class="item-content-wrap">
                    <ul class="line clearfix">
                        <li>
                            <span>操盘资金</span>
                            <span class="color-black">{{1300000|number('0.00')}}</span>
                        </li>
                        <li>
                            <span>风险保证金</span>
                            <span class="color-black">3000.00</span>
                        </li>
                    </ul>
                    <div>
                        <span>累计盈亏</span>
                        <span v-red-green="totalTradeList[index] - trade.wfPercent">{{(totalTradeList[index] - trade.wfPercent)|number('0.00')}} ({{(totalTradeList[index] - trade.wfPercent)/trade.wfPercent*100|number('0.00')|operator}}%)</span>
                    </div>
                    <img src="../../../assets/images/trade/arrear.png" alt="" v-if="trade.ArrearsCost>0">
                </div>
            </div>
        </mt-loadmore>
        <!-- <router-link :to="'/mytrade/detail'">当前详情</router-link> -->
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
                type: BUSS.TRADE_LIST_TYPE
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
            console.log('top');
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
            console.log('loadBottom');
            this.allLoaded = true;
            this.getTradeList().then((data) => {
                if (data.tradeList.totalPage < this.tradeListForm.page) {
                    this.allLoaded = true;
                } else {
                    this.allLoaded = false;
                    this.tradeListForm.page++;
                    this.tradeList = this.tradeList.concat(data.tradeList.resultList);
                }
                window.scrollTo(0, 0);
                this.$refs.loadmore.onBottomLoaded()
                utilService.closeLoading();
            }).catch(error => {
                this.allLoaded = true;
                this.$refs.loadmore.onBottomLoaded()
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
            console.log(123);
            return totalTradeList;
        }
    },
    mounted () {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
}
</script>

<style lang="scss">
@import "../../../scss/variables";
.trade-list {
  margin-top: 90px;
  .trade-list-item {
    position: relative;
    font-size: 1.4rem;
    background-color: $color-white;
    margin-bottom: 1rem;
    border-top: border($color-greyD);
    border-bottom: border($color-greyD);
    .item-title-wrap {
      padding: 1.5rem 0;
      padding-right: 1.5rem;
      margin-left: 1.5rem;
      font-size: 1.2rem;
      border-bottom: border($color-greyD);
      .title-name {
        font-size: 1.5rem;
      }
      .title-status {
        margin-left: 0.5rem;
        padding: 0 0.7rem;
        background-color: $color-red;
        border-radius: 10px;
        color: $color-white;
        font-size: 1.2rem;
      }
      .title-date {
        color: $color-grey;
        float: right;
        font-size: 1.2rem;
      }
    }
    .item-content-wrap {
      padding: 1.5rem 1.5rem;
      color: $color-grey;
      ul.line {
        padding-bottom: 1.5rem;
        li {
          float: left;
          width: 50%;
        }
      }
      img {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 4.5rem;
        width: 4.5rem;
      }
    }
  }
}
</style>