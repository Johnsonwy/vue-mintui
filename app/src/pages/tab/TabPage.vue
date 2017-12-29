
<template>
    <div class="tab">
        <!-- 路由页面 -->
        <router-view class="tab-view"></router-view>
        <!-- 底部tab -->
        <vv-tabbar v-model="selected">
            <vv-tab-item :id='tabs[0].id' :to="tabs[0].href">
                <img src="../../assets/images/icon/home.png" alt="" slot="icon" v-if="tabs[0].id!=selected">
                <img src="../../assets/images/icon/home2.png" alt="" slot="icon" v-if="tabs[0].id==selected">{{tabs[0].name}}
            </vv-tab-item>
            <vv-tab-item :id='tabs[1].id' :to="tabs[1].href">
                <img src="../../assets/images/icon/trade.png" alt="" slot="icon" v-if="tabs[1].id!=selected">
                <img src="../../assets/images/icon/trade2.png" alt="" slot="icon" v-if="tabs[1].id==selected">{{tabs[1].name}}
            </vv-tab-item>
            <vv-tab-item :id='tabs[2].id' :to="tabs[2].href">
                <img src="../../assets/images/icon/transaction.png" alt="" slot="icon" v-if="tabs[2].id!=selected">
                <img src="../../assets/images/icon/transaction2.png" alt="" slot="icon" v-if="tabs[2].id==selected">{{tabs[2].name}}
            </vv-tab-item>
            <vv-tab-item :id='tabs[3].id' :to="tabs[3].href">
                <img src="../../assets/images/icon/user.png" alt="" slot="icon" v-if="tabs[3].id!=selected">
                <img src="../../assets/images/icon/user2.png" alt="" slot="icon" v-if="tabs[3].id==selected">{{tabs[3].name}}
            </vv-tab-item>
        </vv-tabbar>
    </div>
</template>

<script>
import { tabs } from '../../services/global.js';
export default {
    name: 'Tab',
    data: function () {
        return {
            tabs: tabs,
            selected: tabs[0].id
        }
    },
    methods: {
        // 根据当前路由，更新tabbar样式
        initTabarActive: function () {
            for (let i = 0; i < tabs.length; i++) {
                if (this.$route.path.indexOf(tabs[i].href) != -1) {
                    this.selected = tabs[i].id;
                    return;
                }
            }
        }
    },
    created: function () {
        console.log('init Tab router');
        this.initTabarActive();
    },
    beforeUpdate: function () {
        this.initTabarActive();
    }
}
</script>

<style lang="scss">
@import "../../scss/common/_variables.scss";
.tab {
  // 底部空隙
  .tab-view {
    padding-bottom: 60px;
  }
}
</style>


