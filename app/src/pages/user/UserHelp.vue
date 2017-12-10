<template>
    <div class="user-help header-top">
        <mt-header fixed title="user-help">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-help',
    data() {
        return {
            msg: 'user-help'
        }
    }
}
</script>

<style lang="scss">

</style>