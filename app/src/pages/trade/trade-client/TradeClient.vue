<template>
    <div class="trade-client header-top">
        <mt-header fixed title="trade-client">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        <router-view></router-view>
        <router-link :to="'/tradeclient/position'">position</router-link>
        <router-link :to="'/tradeclient/cancel'">cancel</router-link>
        <router-link :to="'/tradeclient/query'">query</router-link>
        <router-link :to="'/tradeclient/transaction'">buy</router-link>
    </div>
</template>

<script>
export default {
    name: 'trade-client',
    data() {
        return {
            msg: 'trade-client'
        }
    }
}
</script>

<style lang="scss">

</style>