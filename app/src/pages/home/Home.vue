<template>
    <div class="home">
        <mt-loadmore :top-method="loadTop" ref="loadmore" topDropText="正在加载数据">
            <!-- banner -->
            <mt-swipe :auto="2000" :style="{height:bannerHeight}">
                <mt-swipe-item :style="{height:bannerHeight}" v-for="(banner,index) in banners" :key="index">
                    <img :src="banner.attrValue" :alt="banner.title">
                </mt-swipe-item>
            </mt-swipe>
            <!-- 活动 -->
            <ul class="home-active clearfix">
                <li>
                    <div class="home-active-item clearfix">
                        <span class="text1">新手指引</span>
                        <span class="text2">新人领取350元红包</span>
                    </div>
                    <img src="../../assets/images/home/guide.png" alt="" class="home-active-img clearfix">
                </li>
                <li v-go="'/active/center'">
                    <div class="home-active-item clearfix">
                        <span class="text1">活动中心</span>
                        <span class="text2">查看更多精彩活动</span>
                    </div>
                    <img src="../../assets/images/home/active-center.png" alt="" class="home-active-img clearfix">
                </li>
            </ul>
            <!-- 新手专区 -->
            <div class="home-newcenter">
                <div class="newcenter-title font-14">新手专区</div>
                <div class="newcenter-wrap">
                    <div class="newcenter-content">
                        <div class="title font-12">
                            免费体验
                        </div>
                        <div class="font-16 font-bold color-red">2100元</div>
                        <div class="font-14 font-bold">操盘体验资金</div>
                        <div class="font-12">2个交易日</div>
                    </div>
                    <div class="newcenter-content">
                        <div class="title font-12">
                            免息体验
                        </div>
                        <div class="font-16 font-bold color-red">6000元</div>
                        <div class="font-14 font-bold">操盘体验资金</div>
                        <div class="font-12">一个月</div>
                    </div>
                </div>
            </div>
            <!-- 产品列表 -->
            <div class="home-product-list">
                <div class="product-list-title font-14 color-black">配资产品</div>
                <div class="product-list-item" v-for="advert in adverts" :key="advert.id">
                    <img v-if="advert.product.pzType==0" src="../../assets/images/home/product1.png" alt="">
                    <img v-if="advert.product.pzType==1" src="../../assets/images/home/product2.png" alt="">
                    <img v-if="advert.product.pzType==5||advert.product.pzType==9" src="../../assets/images/home/product3.png" alt="">
                    <img v-if="advert.product.pzType==6" src="../../assets/images/home/product4.png" alt="">
                    <img v-if="advert.product.pzType==15" src="../../assets/images/home/product5.png" alt="">
                    <div class="item-wrap">
                        <div class="font-14 font-bold color-red item-title">{{advert.name}}</div>
                        <div class="font-12 color-grey">{{advert.slogan}}</div>
                    </div>
                    <div class="item-wrap2">
                        <span class="font-40 color-red">{{advert.product.mutipleOptions|strToArr|getArrItem(0)}}~{{advert.product.mutipleOptions|getArrMaxItem}}
                            <span class="font-12">倍杠杆</span>
                        </span>
                        <i class="icon icon-more1 color-grey"></i>
                    </div>
                </div>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
import { utilService } from '../../services/utilService.js';
import { bussService } from '../../services/bussService';
import { API, BUSS } from '../../services/global.js';
export default {
    // name: 'Home',
    data () {
        return {
            bannerHeight: utilService.getHeightByDeviceWidth(),
            adverts: [],
            banners: []
        }
    },
    methods: {
        loadTop () {
            this.$http.asyncAjax([{
                url: API.product_show_get,
                data: {
                    type: 0
                }
            }, {
                url: API.cms_getbanner_post,
                prefix: '.cms',
                method: 'post',
                data: { adspaceId: BUSS.CMS_INDEX_ADSID }
            }]).then((data) => {
                utilService.initScroll(this.$refs);
                this.adverts = data[0].adverts;
                this.banners = data[1].jDtos;
                utilService.closeLoading();
            }).catch(error => {
                utilService.initScroll(this.$refs);
                utilService.closeLoading();
                utilService.showError(error);
            });
        }
    },
    created () {
        this.loadTop();
    }
}
</script>

<style lang="scss">
@import "../../scss/common/_variables.scss";
.home {
  .mint-swipe-item img {
    width: 100%;
  }
  //   padding-bottom: 1.5rem;
  .home-active,
  .home-newcenter,
  .home-product-list {
    background-color: $color-white;
    border-bottom: 1px solid $color-greyD;
  }
  ul.home-active {
    margin-bottom: 1rem;
    padding: 2rem 0;
    li {
      float: left;
      width: 50%;
      text-align: center;
      &:first-of-type {
        border-right: 1px solid $color-greyD;
      }
      .home-active-item {
        display: inline-block;
        text-align: left;
        span {
          display: block;
        }
        .text1 {
          font-size: 1.5rem;
          color: $color-black;
          margin-bottom: 1rem;
        }
        .text2 {
          font-size: $font-min;
          color: $color-grey;
        }
      }
      .home-active-img {
        height: 4.4rem;
        width: 4.7rem;
      }
    }
  }
  .home-newcenter {
    margin-bottom: 1rem;
    border-top: 1px solid $color-greyD;
    padding: 1.5rem 1.5rem;
    .newcenter-title {
      margin-bottom: 1.4rem;
      color: $color-black;
    }
    .newcenter-wrap {
      .newcenter-content {
        border: 1px solid $color-greyD;
        border-radius: 5px;
        width: 48%;
        display: inline-block;
        div {
          margin-bottom: 0.4rem;
          text-align: center;
        }
        .title {
          text-align: left;
          background: url("../../assets/images/home/flag.png") no-repeat;
          background-size: 8rem 1.7rem;
          color: $color-white;
          padding-left: 0.6rem;
        }
        &:last-of-type {
          float: right;
        }
      }
    }
  }
  .home-product-list {
    border-top: 1px solid $color-greyD;
    border-bottom: 1px solid $color-greyD;
    .product-list-title {
      padding: 1.5rem 1.5rem;
      border-bottom: 1px solid $color-greyD;
    }
    .product-list-item {
      padding: 1.5rem 1.5rem 1.5rem 0;
      border-bottom: 1px solid $color-greyD;
      margin-left: 1.5rem;
      position: relative;
      img {
        width: 4rem;
      }
      .item-wrap,
      .item-wrap2 {
        position: absolute;
        top: 1.5rem;
      }
      .item-wrap {
        display: inline-block;
        margin-left: 1.5rem;
        .item-title {
          margin-bottom: 0.8rem;
        }
      }
      .item-wrap2 {
        right: 1.5rem;
        line-height: 4rem;
      }
      &:last-of-type {
        border: none;
      }
    }
  }
}
</style>