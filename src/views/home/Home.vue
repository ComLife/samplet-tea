<template>
  <div id="home">
    <scroll class="content"
            ref="scroll"
            :pullup="false"
            :pulldown="false"
    >
      <div class="extensionBox">
        <img  v-for="(item, index) in extensionArr" @click="toDetail(item)" :key="index" src="../../assets/img/test.jpg" alt="">
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '../../components/scroll/BetterScroll';
  import {CODE_STATUS} from "../../config/enum";
  import {homePagePost} from "../../server/request";

  export default {
    name: 'App',
    components: {
      Scroll
    },
    created() {
      homePagePost().then((res)=>{
        if(res.code === CODE_STATUS.success){
          console.log('111111111=', res.data);
          this.extensionArr = res.data;
        }else{
          this.$toast(res.msg)
        }
      });
    },
    data(){
      return {
        extensionArr: [],
      }
    },
    methods: {
      toDetail(item){
        this.$router.push({path: '/detail', query: {id: item.id}})
      },

      // pullDownTest(){
      //   setTimeout(()=>{
      //     this.$refs.scroll.finishPullDown();
      //   }, 2000)
      // },
      // pullUpTest(){
      //   console.log('下拉加载完成');
      //   setTimeout(()=>{
      //     this.extensionArr = this.extensionArr.concat([1,2,3,4,5,6,7,8,9])
      //     this.$refs.scroll.finishPullUp();
      //   }, 2000)
      // }
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
    }
  }

</style>
