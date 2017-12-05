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
import { mapState } from 'vuex'
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Home'
        }
    },
    computed: {
        ...mapState(['count'])
    },
    created: function () {
        console.log(this.count)
        this.$store.commit('increment');
        console.log(this.$store.state.count);
    }
}
</script>

<style lang="scss">

</style>