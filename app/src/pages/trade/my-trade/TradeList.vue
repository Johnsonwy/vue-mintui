<template>
    <div class="trade-list">
        <mt-header fixed title="trade-list">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        <router-link :to="'/mytrade/detail'">当前详情</router-link>
    </div>
</template>

<script>
export default {
    name: 'trade-list',
    data() {
        return {
            msg: 'trade-list'
        }
    }
}
</script>

<style lang="scss">

</style>