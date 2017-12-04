<template>
    <div>
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Page',
    data () {
        return {
            msg: 'Page'
        }
    }
}
</script>

<style lang="scss">

</style>