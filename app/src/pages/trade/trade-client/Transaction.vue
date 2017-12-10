<template>
    <div class="transaction">
        <mt-header fixed title="transaction">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'transaction',
    data() {
        return {
            msg: 'transaction'
        }
    }
}
</script>

<style lang="scss">

</style>