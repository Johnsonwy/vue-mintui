<template>
    <div class="trade head-top">
        <mt-header fixed title="申请合约1"></mt-header>
        {{msg}}
        <div v-go="'/trade/applytrade'">下一步</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Trade'
        }
    }
}
</script>

<style lang="scss">

</style>