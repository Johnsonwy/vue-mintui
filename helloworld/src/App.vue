<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function () {
    return {
      selected: 'Hello world!',
      transitionName: ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.transitionName = to.path.indexOf('page') !== -1 ? 'bounceInRight' : '';
    }
  }
};
</script>

<style>

</style>
