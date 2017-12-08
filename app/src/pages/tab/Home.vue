<template>
    <mt-swipe :auto="2000" :continuous='false'>
        <mt-swipe-item class="sild1">
            <img src="http://192.168.1.65:96/Carousel/u/cms/www/201709/12180325tss6.png" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Home'
        }
    }
}
</script>

<style lang="scss">
.mint-swipe-item {
  border: 1px solid red;
  height: 300px;
}
.sild1 {
  background-color: #0089dc;
  color: #fff;
  height: 100px;
}
</style>