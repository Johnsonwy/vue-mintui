<template>
    <div>
        {{msg}}
        <div>
            <router-link to="/page/home/free/123">免费体验</router-link>
            <router-link to="/page/home/activity">活动中心</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            msg: 'Home'
        }
    }
}
</script>

<style lang="scss">

</style>