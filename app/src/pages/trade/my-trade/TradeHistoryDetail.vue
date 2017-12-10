<template>
    <div class="trade-history-detail header-top">
        <mt-header fixed title="trade-history-detail">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'trade-history-detail',
    data() {
        return {
            msg: 'trade-history-detail'
        }
    }
}
</script>

<style lang="scss">

</style>