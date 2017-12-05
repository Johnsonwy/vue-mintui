<template>
    <div>
        {{msg}}

        <mt-tabbar>
            <mt-tab-item id="a">
                <router-link to="/tabs/home">a</router-link>
            </mt-tab-item>
            <mt-tab-item id="b">
                <router-link to="/tabs/trade">b</router-link>
            </mt-tab-item>
            <mt-tab-item id="c">
                <router-link to="/tabs/transition">c</router-link>
            </mt-tab-item>
            <mt-tab-item id="d">
                d
            </mt-tab-item>
        </mt-tabbar>
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