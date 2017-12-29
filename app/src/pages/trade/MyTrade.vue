
<template>
    <div class="my-trade header2-top">
        <mt-header fixed title="我的交易"></mt-header>
        <mt-navbar class="second-nav" v-model="selected">
            <mt-tab-item id="1" v-go="'/tab/mytrade/list'">当前列表</mt-tab-item>
            <mt-tab-item id="2" v-go="'/tab/mytrade/historylist'">历史列表</mt-tab-item>
        </mt-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'MyTrade',
    data: function () {
        return {
            msg: 'my-trade',
            selected: '1'
        }
    },
    methods: {
    },
    created: function () {
        this.selected = this.$route.path.indexOf('historyList') !== -1 ? '2' : '1';
    }
}
</script>

<style lang="scss">
.my-trade {
  .second-nav {
    position: fixed;
    top: 45px;
    z-index: 1;
    width: 100%;
  }
}
</style>