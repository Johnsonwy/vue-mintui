<template>
    <div>
        <mt-navbar>
            <mt-tab-item id="1">
                <router-link to="/tabs/transition/currentList">当前合约</router-link>
            </mt-tab-item>
            <mt-tab-item id="2">
                <router-link to="/tabs/transition/historyList">历史合约</router-link>
            </mt-tab-item>
        </mt-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Transition',
    data () {
        return {
            msg: 'Transition'
        }
    }
}
</script>

<style lang="scss">

</style>