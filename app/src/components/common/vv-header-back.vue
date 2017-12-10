<template>
    <mt-button icon="back" @click="back()"></mt-button>
</template>

<script>
export default {
    name: 'vv-header-back',
    data() {
        return {
            msg: 'User'
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss">

</style>