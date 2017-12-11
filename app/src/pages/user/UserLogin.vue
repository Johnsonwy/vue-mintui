<template>
    <div class="user-login header-top">
        <mt-header fixed title="user-login">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-login',
    data () {
        return {
            msg: 'user-login'
        }
    },
    created: function () {
        console.log(this);
    }
}
</script>

<style lang="scss">

</style>