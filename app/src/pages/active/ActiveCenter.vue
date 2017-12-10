<template>
    <div class="active-center header-top">
        <mt-header fixed title="活动专区">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        <img src="http://m.ofo.so/image/home-pic-2.jpg" alt="">
        <img src="http://m.ofo.so/image/home-pic-3.jpg" alt="">
        <img src="http://m.ofo.so/image/home-pic-4.jpg" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
@import "../../scss/_variables.scss";
.active-center {
  background-color: $color-white;
  img {
    width: 100%;
    margin-top: 1.5rem;
    &:last-of-type {
      margin-bottom: 3rem;
    }
  }
}
</style>