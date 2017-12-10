<template>
    <div class="transaction">
        <mt-header fixed title="我的交易"></mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'Transaction',
    data() {
        return {
            msg: 'Transaction'
        }
    }
}
</script>

<style lang="scss">

</style>