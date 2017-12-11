<template>
    <div class="page-loadmore">
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul class="page-loadmore-list">
                    <!-- <li v-for="item in list" class="page-loadmore-listitem" :key="item">{{ item }}</li> -->
                    <mt-cell-swipe :title="item+''" v-for="item in list" class="page-loadmore-listitem" :key="item"></mt-cell-swipe>
                </ul>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [],
            allLoaded: false,//true 不加载
            bottomStatus: '',
            wrapperHeight: 0
        };
    },
    methods: {
        handleBottomChange (status) {
            this.bottomStatus = status;
        },
        loadBottom () {
            setTimeout(() => {
                let lastValue = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(String(lastValue + i));
                }
                // this.allLoaded = true;
                this.$refs.loadmore.onBottomLoaded();
            }, 1500);
        }
    },
    created () {
        for (let i = 1; i <= 20; i++) {
            this.list.push(i);
        }
    },
    mounted () {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 60;
    }
}
</script>

<style lang="scss">

</style>