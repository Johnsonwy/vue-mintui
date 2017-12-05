<template>
    <div>
        <router-view></router-view>
        <mt-tabbar>
            <mt-tab-item id="首页">
                <router-link to="/tabs/home">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="配资">
                <router-link to="/tabs/trade">配资</router-link>
            </mt-tab-item>
            <mt-tab-item id="交易">
                <router-link to="/tabs/transition">交易</router-link>
            </mt-tab-item>
            <mt-tab-item id="我的">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    data () {
        return {
            msg: 'Tabs'
        }
    }
}
</script>

<style lang="scss">
.mint-tab-item a {
  font-size: 2rem;
}
</style>