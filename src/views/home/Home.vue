<template>
  <div id="home">
    <scroll class="content"
            ref="scroll"
            :pullup="true"
            :pulldown="true"
            @pullDown = 'pullDownTest'
            @pullUp = 'pullUpTest'
    >
      <div class="extensionBox">
        <img  v-for="(item, index) in extensionArr" @click="toDetail(item)" :key="index" src="../../assets/img/test.jpg" alt="">
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
        extensionArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }
    },
    methods: {
      toDetail(item){
        this.$router.push({path: '/detail', query: {item: item}})
      },
      pullDownTest(){
        setTimeout(()=>{
          this.$refs.scroll.finishPullDown();
        }, 2000)
      },
      pullUpTest(){
        console.log('下拉加载完成');
        setTimeout(()=>{
          this.extensionArr = this.extensionArr.concat([1,2,3,4,5,6,7,8,9])
          this.$refs.scroll.finishPullUp();
        }, 2000)


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
      height: 150px;
      border: 1px solid #000;
    }
  }

</style>
