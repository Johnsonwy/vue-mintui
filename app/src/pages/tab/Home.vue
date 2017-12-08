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
    </div>
</template>

<script>
import { UtilService } from '../../services/UtilService.js';
export default {
    name: 'Home',
    data() {
        return {
            bannerHeight: UtilService.getHeightByDeviceWidth()
        }
    }
}
</script>

<style lang="scss">
@import "../../scss/_variables.scss";
.mint-swipe-item img {
  width: 100%;
}
.home {
  ul.home-active {
    background-color: $color-white;
    border-bottom: 1px solid $color-greyD;
    padding: 1rem 0;
    li {
      float: left;
      width: 50%;
      text-align: center;
      &:first-of-type {
        border-right: 1px solid $color-greyD;
      }
      .home-active-item {
        text-align: left;
        height: 5rem;
        display: inline-block;
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
        width: 5.3rem;
        height: 5rem;
      }
    }
  }
}
</style>