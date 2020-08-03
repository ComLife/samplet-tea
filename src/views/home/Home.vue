<template>
  <div id="home">
    <scroll class="content"
            ref="scroll">
      <div class="extensionBox">
        <img  v-for="(item, index) in extensionArr" @click="toDetail" :key="index" src="../../assets/img/extension/xiangfei2.png" alt="">
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '../../components/scroll/Scroll'
  export default {
    name: 'App',
    components: {
      Scroll
    },
    data(){
      return {
        extensionArr: [],
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
      height: 40px;
    }
  }

</style>
