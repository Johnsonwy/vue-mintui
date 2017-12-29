<template>
  <div class="tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vv-tabbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>

<style lang="scss">
@import "../../scss/common/_variables.scss";
.tabbar {
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  background-color: $color-white;
  border-top: border($color-greyD);
  border-bottom: border($color-greyD);
}
</style>
