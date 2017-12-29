<template>
  <a class="tab-item" @click="$parent.$emit('input', id)" :class="{ 'is-selected': $parent.value === id }">
    <router-link :to="to">
      <div class="tab-item-icon">
        <slot name="icon"></slot>
      </div>
      <div class="tab-item-label">
        <slot></slot>
      </div>
    </router-link>
  </a>
</template>

<script>
export default {
  name: 'vv-tab-item',

  props: ['id', 'to']
};
</script>

<style lang="scss">
@import "../../scss/common/_variables.scss";
.tab-item {
  display: block;
  padding: 10px 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-decoration: none;
  a {
    text-decoration: none;
  }
  .tab-item-icon img {
    width: 20px;
    height: 20px;
    margin: 0 auto 5px;
  }
  .tab-item-label {
    color: $color-grey;
    font-size: 12px;
    line-height: 1;
    text-decoration: none;
  }
  &.is-selected {
    .tab-item-label {
      color: $color-red;
    }
  }
}
</style>
