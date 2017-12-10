<template>
    <div class="user-found header-top">
        <mt-header fixed title="user-found">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-found',
    data() {
        return {
            msg: 'user-found'
        }
    }
}
</script>

<style lang="scss">

</style>