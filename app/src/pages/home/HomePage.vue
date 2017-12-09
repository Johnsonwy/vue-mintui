/*
 * @Author: shixinghao 
 * @Date: 2017-12-09 11:44:54 
 * @Last Modified by: shixinghaoshixinghao
 * @Last Modified time: 2017-12-09 17:01:38
 */
<template>
    <div class="home">
        <!-- banner -->
        <mt-swipe :auto="2000" :style="{height:bannerHeight}">
            <mt-swipe-item :style="{height:bannerHeight}">
                <img src="http://121.40.156.197:8070/u/cms/www/201703/14170406tsru.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item :style="{height:bannerHeight}">
                <img src="http://121.40.156.197:8070/u/cms/www/201703/14170406tsru.jpg" alt="">
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
            <li>
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
            <div class="product-list-title"> 配资产品</div>
            <div class="product-list-item">
                <img src="../../assets/images/home/product1.png" alt="">
                <div class="item-wrap">
                    <div class="font-14 font-bold color-red">免息赢</div>
                    <div class="font-12 color-grey">管理费全免</div>
                </div>
                <div class="item-wrap2">
                    <span class="font-40 color-red">6~10
                        <span class="font-12">倍杠杆</span>
                    </span>
                    <i class="icon icon-more1 color-grey"></i>
                </div>
            </div>
            <div class="product-list-item">
                <img src="../../assets/images/home/product2.png" alt="">
                <div class="item-wrap">
                    <div class="font-14 font-bold color-red">日日升</div>
                    <div class="font-12 color-grey">放大十倍收益</div>
                </div>
                <div class="item-wrap2">
                    <span class="font-40 color-red">6~10
                        <span class="font-12">倍杠杆</span>
                    </span>
                    <i class="icon icon-more1 color-grey"></i>
                </div>
            </div>
            <div class="product-list-item">
                <img src="../../assets/images/home/product3.png" alt="">
                <div class="item-wrap">
                    <div class="font-14 font-bold color-red">月月翻</div>
                    <div class="font-12 color-grey">按月配更优惠</div>
                </div>
                <div class="item-wrap2">
                    <span class="font-40 color-red">6~10
                        <span class="font-12">倍杠杆</span>
                    </span>
                    <i class="icon icon-more1 color-grey"></i>
                </div>
            </div>
            <div class="product-list-item">
                <img src="../../assets/images/home/product4.png" alt="">
                <div class="item-wrap">
                    <div class="font-14 font-bold color-red">至尊惠</div>
                    <div class="font-12 color-grey">月息低至0.8%</div>
                </div>
                <div class="item-wrap2">
                    <span class="font-40 color-red">6~10
                        <span class="font-12">倍杠杆</span>
                    </span>
                    <i class="icon icon-more1 color-grey"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { UtilService } from '../../services/UtilService.js';
export default {
    // name: 'Home',
    data() {
        return {
            bannerHeight: UtilService.getHeightByDeviceWidth()
        }
    }
}
</script>

<style lang="scss">
@import "../../scss/_variables.scss";
.home {
  .mint-swipe-item img {
    width: 100%;
  }
  padding-bottom: 1.5rem;
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