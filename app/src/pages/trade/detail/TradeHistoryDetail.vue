
<template>
    <div class="user header-top">
        <mt-header fixed title="我的"></mt-header>
    </div>
</template>

<script>
export default {
    name: 'User',
    data: function () {
        return {
            msg: 'User'
        }
    },
    methods: {
    },
    created: function () {
        console.log('init User router');
    }
}
</script>

<style lang="scss">

</style>