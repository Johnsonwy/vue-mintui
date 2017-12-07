<template>
    <div>
        <router-view></router-view>
        <mt-tabbar fixed=true>
            <mt-tab-item id="首页">
                <router-link to="/tab/home">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="配资">
                <router-link to="/tab/trade">配资</router-link>
            </mt-tab-item>
            <mt-tab-item id="交易">
                <router-link to="/tab/transaction">交易</router-link>
            </mt-tab-item>
            <mt-tab-item id="我的">
                <router-link to="/tab/user">交易
                    <i class="icon icon-shangjiaqun"></i>
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    data: function () {
        return {
            msg: 'Hello world!'
        }
    },
    created: function () {
        console.log('init Tab');
    }
};
</script>

<style>

</style>
