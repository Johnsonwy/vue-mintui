<template>
    <div class="user-about header-top">
        <mt-header fixed title="user-about">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-about',
    data() {
        return {
            msg: 'user-about'
        }
    }
}
</script>

<style lang="scss">

</style>