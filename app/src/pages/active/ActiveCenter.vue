<template>
    <div class="active-center header-top">
        <mt-header fixed title="活动专区">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        <img src="../../assets/images/home/active-center1.png" alt="">
        <img src="../../assets/images/home/active-center2.png" alt="">
        <img src="../../assets/images/home/active-center3.png" alt="">
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