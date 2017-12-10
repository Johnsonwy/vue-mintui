<template>
    <div class="trade-detail header-top">
        <mt-header fixed title="trade-detail">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
        <router-link :to="'/tradeclient'">客户端</router-link>
    </div>
</template>

<script>
export default {
    name: 'trade-detail',
    data() {
        return {
            msg: 'trade-detail'
        }
    }
}
</script>

<style lang="scss">

</style>