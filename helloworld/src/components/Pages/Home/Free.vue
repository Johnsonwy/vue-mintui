<template>
    <div>{{msg}}
        <div>{{ $route.params.id }}</div>
    </div>
</template>

<script>

export default {
    name: 'Free',
    data () {
        return {
            msg: 'Free'
        }
    },
    created: function () {
        this.$http.request({ url: '/user/getbalance.api' }).then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        })
    },
    destroyed: function () {
        console.log(88);
    }
}
</script>

<style lang="scss">

</style>