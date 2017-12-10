<template>
    <div class="trade-history-list">
        <mt-header fixed title="trade-history-list">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        <router-link :to="'/mytrade/historydetail'">历史详情</router-link>
    </div>
</template>

<script>
export default {
    name: 'trade-history-list',
    data() {
        return {
            msg: 'trade-history-list'
        }
    }
}
</script>

<style lang="scss">

</style>