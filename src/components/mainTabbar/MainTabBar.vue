<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="icon" src="../../assets/img/tabbar/home.svg" alt="">
      <img slot="active-icon" src="../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/adver">
      <img slot="icon" src="../../assets/img/tabbar/category.svg" alt="">
      <img slot="active-icon" src="../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">论坛</div>
    </tab-bar-item>
    <tab-bar-item link="/user">
      <img slot="icon" src="../../assets/img/tabbar/profile.svg" alt="">
      <img slot="active-icon" src="../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
    import TabBar from '../tabbar/TabBar'
    import TabBarItem from '../tabbar/TabBarItem'

    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>
