<template>
    <div class="user-recharge header-top">
        <mt-header fixed title="user-recharge">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-recharge',
    data() {
        return {
            msg: 'user-recharge'
        }
    }
}
</script>

<style lang="scss">

</style>