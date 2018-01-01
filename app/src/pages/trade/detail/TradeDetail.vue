<template>
    <div v-whole-screen class="trade-detail-wrap">
        <div class="user header-top">
            <mt-header fixed title="合约详情">
                <vv-header-back slot="left"></vv-header-back>
            </mt-header>
        </div>
        <div class="trade-detail">
            <!-- 欠费 -->
            <div class="tip-arrear">
                <i class="icon icon-jinggao"></i>
                <span>当前合约已欠费 </span>
                <span class="tip-value">288.21</span>
                <span> 元，
                    <a href="" class="tip-recharge">点击立即充值 >></a>
                </span>
            </div>
            <!-- 概要 -->
            <ul class="detail-content clearfix">
                <li class="trade-simple">
                    <div class="title">当前盈亏</div>
                    <div class="value" v-red-green="99281.00">99281.00
                        <span class="profit">+3.9%</span>
                    </div>
                </li>
                <li class="trade-simple">
                    <div class="title">合约总资产</div>
                    <div class="value">99281.00
                        <span class="profit">+3.9%</span>
                    </div>
                </li>
            </ul>
            <!-- 详情 -->
            <div class="detail-content">
                <div class="trade-title">
                    合约信息
                    <span class="trade-id">(1238129319238)</span>
                    <a href="" class="trade-href">查看合约流水</a>
                </div>
                <ul class="trade-info-wrap clearfix">
                    <li>
                        <div class="info-item">
                            <span>持仓市值</span>
                            <span class="value">120000</span>
                        </div>
                        <div class="info-item">
                            <span>申请额度</span>
                            <span class="value">120000</span>
                        </div>
                        <div class="info-item">
                            <span>利息支出</span>
                            <span class="value">120000</span>
                        </div>
                    </li>
                    <li>
                        <div class="info-item">
                            <span>可用现金</span>
                            <span class="value">120000</span>
                        </div>
                        <div class="info-item">
                            <span>操盘资金</span>
                            <span class="value">120000</span>
                        </div>
                        <div class="info-item">
                            <span>使用天数</span>
                            <span class="value">120000</span>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 仪表板 -->
            <div class="detail-content clearfix noborder">
                <div class="trade-title">&nbsp;
                    <a href="" class="trade-href">今日限买股</a>
                </div>
                <div class="trade-panel-wrap">
                    <img class="panel" src="../../../assets/images/trade/panel.png" alt="仪表盘">
                    <img class="point" src="../../../assets/images/trade/panel-point.png" alt="箭头">
                </div>
            </div>
            <div class="trade-operator-wrap">

                <button class="operator">
                    <i class="icon icon-caidan"></i>更多操作
                    <div class="trade-operator-list">
                        <div class="operator-list-item">追加本金</div>
                        <div class="operator-list-item">申请结算</div>
                        <div class="operator-list-item">停牌股转合约</div>
                        <div class="arrow"></div>
                    </div>
                </button>
                <button class="operator">申请结算</button>
                <button class="operator-trade">交易委托</button>
            </div>
        </div>
    </div>

</template>

<script>
/*
 * @Author: shixinghao 
 * @Date: 2017-12-28 15:29:54 
 * @Last Modified by: shixinghaoshixinghao
 * @Last Modified time: 2018-01-01 21:43:37
 */
import { API } from '../../../services/global';
import { tradeService } from '../../../services/tradeService';
import { utilService } from '../../../services/utilService';
export default {
    name: 'User',
    data: function () {
        return {
            tradeId: '',
            popupVisible: true
        }
    },
    methods: {
        init: function () {
            // 查询当前合约详情
            tradeService.getTradeDetail.call(this, this.tradeId + 1).then(data => {
                console.log(data);
            }, error => {
                utilService.showError(error);
            })
        }
    },
    created: function () {
        this.tradeId = this.$route.query.tradeId;
        this.init();
    }
}
</script>

<style lang="scss">
@import "../../../scss/common/_variables.scss";
.trade-detail-wrap {
  background-color: $color-white;
}
.trade-detail {
  background-color: $color-white;
  // 欠费
  .tip-arrear {
    background-color: $color-pink;
    padding: 1rem;
    i {
      color: $color-red;
      border-radius: 50%;
      margin-right: 0.4rem;
    }
    .tip-value {
      color: $color-red;
    }
    .tip-recharge {
      text-decoration: underline;
    }
  }
  .detail-content {
    padding: 1.5rem 1.5rem 1.5rem 0;
    margin-left: 1.5rem;
    border-bottom: border($color-greyD);
    &.noborder {
      border: none;
    }
    li {
      float: left;
      width: 50%;
    }
    li.trade-simple {
      .title {
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
      }
      .value {
        font-size: 2.5rem;
        .profit {
          font-size: 1.2rem;
        }
      }
    }
    .trade-title {
      font-size: 1.5rem;
      margin-bottom: 1.3rem;
      .trade-id {
        font-size: 1.2rem;
        color: $color-grey;
      }
      a.trade-href {
        float: right;
        text-decoration: underline;
        color: $color-black;
      }
    }
    ul.trade-info-wrap {
      .info-item {
        font-size: 1.4rem;
        color: $color-grey;
        .value {
          color: $color-black;
          margin-left: 1rem;
        }
      }
    }
    .trade-panel-wrap {
      position: relative;
      img.panel {
        width: 100%;
      }
      img.point {
        width: 1rem;
        height: auto;
        position: absolute;
        bottom: 1rem;
        transform: translate(-50%, 0) rotate(0deg);
        transform-origin: center bottom;
        left: 50%;
        right: 50%;
      }
    }
  }
  .trade-operator-wrap {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    // 操作列表按钮
    .trade-operator-list {
      bottom: 100%;
      top: auto;
      position: absolute;
      background-color: #fff;
      margin-bottom: 10px;
      border: border($color-greyD);
      border-radius: 5px;

      background-color: $color-white;
      .operator-list-item {
        border-bottom: border($color-greyD);
        padding: 1rem 0;
        margin: 0 1rem;
        text-align: center;
      }
      .arrow {
        width: 0px;
        height: 0;
        border: solid transparent;
        border-width: 10px;
        border-top-color: $color-greyD;
        border-width: 0.6rem;
        position: absolute;
        left: 50%;
        right: 50%;
        margin-left: -5px;
      }
      div:nth-last-of-type(2) {
        border: none;
      }
    }
    .operator,
    .operator-trade {
      position: relative;
      background-color: $color-white;
      padding: 0;
      border: none;
      border-top: border($color-red);
      border-right: border($color-red);
      font-size: 1.6rem;
      color: $color-red;
      padding: 1.6rem 0;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    .operator-trade {
      background-color: $color-red;
      color: $color-white;
    }
    button:last-child {
      border-right: none;
    }
  }
}
// 操作列表
.mint-popup-bottom {
  bottom: 6rem;
  left: 5rem;
}
</style>