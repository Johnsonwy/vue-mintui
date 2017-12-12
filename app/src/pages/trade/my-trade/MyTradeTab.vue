<template>
    <div class="my-trade">
        <mt-header fixed title="我的交易"></mt-header>
        <!-- navbar -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">
                <router-link :to="'/tab/mytrade/list'">当前列表</router-link>
            </mt-tab-item>
            <mt-tab-item id="2">
                <router-link :to="'/tab/mytrade/historylist'">历史列表</router-link>
            </mt-tab-item>
        </mt-navbar>
        <!-- 路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'my-trade',
    data () {
        return {
            msg: 'my-trade',
            selected: '1'
        }
    },
    created: function () {
        this.selected = this.$route.path.indexOf('historylist') ? '2' : '1';
    }
}
</script>

<style lang="scss">

</style>