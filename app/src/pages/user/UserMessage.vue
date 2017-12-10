<template>
    <div class="user-message header-top">
        <mt-header fixed title="user-message">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-message',
    data() {
        return {
            msg: 'user-message'
        }
    }
}
</script>

<style lang="scss">

</style>