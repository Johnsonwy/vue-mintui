<template>
    <div>{{msg}}</div>
</template>

<script>
export default {
    name: 'trade',
    data () {
        return {
            msg: 'trade'
        }
    },
    created: function () {
        console.log(this.$router)
    }
}
</script>

<style lang="scss">

</style>