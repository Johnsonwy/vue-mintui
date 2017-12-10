<template>
    <div class="user-regist header-top">
        <mt-header fixed title="user-regist">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-regist',
    data() {
        return {
            msg: 'user-regist'
        }
    }
}
</script>

<style lang="scss">

</style>