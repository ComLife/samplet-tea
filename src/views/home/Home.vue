<template>
  <div id="home">
    <scroll class="content"
            ref="scroll"
            :pullup="true"
            :pulldown="true"
    >
      <div class="extensionBox">
        <img  v-for="(item, index) in extensionArr" @click="toDetail" :key="index" src="../../assets/img/home/recommend_bg.jpg" alt="">
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '../../components/scroll/BetterScroll'
  export default {
    name: 'App',
    components: {
      Scroll
    },
    data(){
      return {
        extensionArr: [1, 2, 3, 4, 5, 6, 7, 8],
      }
    },
    methods: {
      toDetail(){
        this.$router.push({path: '/detail'})
      }
    },
    mounted: function () {
      this.extensionArr.length = 15
    },
  }
</script>

<style scoped lang="scss">
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 49px;
    width: 100vw;
  }


  .extensionBox{
    width: 100%;
    min-height: 100%;
    img{
      width: 100%;
      height: 200px;
      border: 1px solid #000;
    }
  }

</style>
