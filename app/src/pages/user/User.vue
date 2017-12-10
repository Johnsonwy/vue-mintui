<template>
    <div class="user">
        <mt-header fixed title="我的"></mt-header>
        <mt-button size="small" type="default" v-go="'/user/forgetpwd'">忘记密码</mt-button>
        <mt-button size="small" type="primary" v-go="'/user/login'">登录</mt-button>
        <mt-button size="small" type="danger" v-go="'/user/regist'">注册</mt-button>
        <br>
        <mt-button size="small" type="primary" v-go="'/user/coupon'">积分</mt-button>
        <mt-button size="small" type="danger" v-go="'/user/found'">流水</mt-button>
        <br>
        <mt-button size="small" type="primary" v-go="'/user/about'">关于</mt-button>
        <mt-button size="small" type="danger" v-go="'/user/message'">消息</mt-button>
        <mt-button size="small" type="primary" v-go="'/user/help'">帮助</mt-button>
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            msg: 'User'
        }
    }
}
</script>

<style lang="scss">

</style>