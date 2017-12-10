<template>
    <div class="user-coupon header-top">
        <mt-header fixed title="user-coupon">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-coupon',
    data() {
        return {
            msg: 'user-coupon'
        }
    }
}
</script>

<style lang="scss">

</style>