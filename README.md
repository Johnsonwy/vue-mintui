# vue2 mint-ui

初学vue2，为了更好的学习体验，做一个仿nativeApp的简单应用。同时也借这个项目踩踩坑，对以后web应用做更好的选型。

*业务：参照常用app，看到什么写什么。主要完成功能。主要围绕支付宝 ofo等*
功能包含：用户登录，注册，信息修改等；业务信息列表，详情展示等（后续扩展）；

**ps:此项目为个人学习，瞎搞**

# 技术栈说明 

1. vue2 + vue-router + webpack
2. mint-ti  //饿了吗 mobile UI
3. axios //Http处理
4. 考虑增加 vuex rxjs（如果精力允许）
5. ...

# 项目说明
## 技术概要
1. 没有使用vue-cli构建，感觉太复杂很多配置短时间难以吃透，随着项目扩展会参考其配置逐步完善（vue-cli-demo是vue-cli初始化的空项目，供对照）
2. 用vue-router构建单页面应用。
3. MobileUI选择mint-ti，饿了吗团队诚信之作，市面上的组件基本够全。

## 脚手架,quickstart 
````
npm install //安装npm模块
npm run start //启动
````

## 项目规范
1. (https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐)[https://cn.vuejs.org/v2/style-guide/#基础组件名-强烈推荐]
2. vue文件，组件命名-PascalCase
3. vue dom命名-kebab-case

## 项目规划&进度
- 框架环境
    - [x] 基础框架，简易脚手架
    - [x] 引入UI库
    - [ ] 引入路由，完成主页面的跳转
    - [ ] 封装请求方式
    - [ ] 完善webpack，完成本地/生产的配置
- 主页面功能
    - [ ] 首页-轮播图、活动引导、活动列表
    - [ ] 活动-活动引导
    - [ ] 活动-活动中心
    - [ ] 活动-列表展示 
    - [ ] 用户-登录
    - [ ] 用户-注册
    - [ ] 用户-忘记密码
    - [ ] 用户-用户中心展示
    - [ ] 用户-优惠券管理
    - [ ] 业务-理财模式选择
    - [ ] 业务-理财列表
    - [ ] 业务-理财详情
- 扩展
    - [ ] rxjs管理异步信息
    - [ ] vuex提升性能
    


## 目录简介
````
├─app //主项目
├─helloworld //自己实验的Demo
├─vue-cli-demo //空的vue-cli脚手架
````

# Q&A
1. [https://eminoda.github.io/2017/12/04/vue-helloworld/](https://eminoda.github.io/2017/12/04/vue-helloworld/)

# 其他说明

第一次接触Vue，之前学习大漠穷秋老师的[NiceFish](https://gitee.com/mumu-osc/NiceFish)(安利一波)，现在2个框架都体验下，给自己一个深刻体会。

看了2天的api，感觉vue真是*接地气*，各种百度一堆结果，也是选中vue做这个demo的一个大理由，想想angular2开发各种google（心酸），不得不承认**vue整个社区**对初学者的开发的帮助。
