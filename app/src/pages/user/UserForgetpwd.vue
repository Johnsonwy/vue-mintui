<template>
    <div class="user-forgetpwd header-top">
        <mt-header fixed title="user-forgetpwd">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-forgetpwd',
    data() {
        return {
            msg: 'user-forgetpwd'
        }
    }
}
</script>

<style lang="scss">

</style>