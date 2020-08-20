<template>
  <div id="adver">
    <nav-bar class="nav-bar">
      <div slot="center">论坛</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll">
      <ul>
        <li class="extensionItem" v-for="(item, index) in topMessage" :key="index" @click="toDetail(item)">
          <div class='commentTitleBox'>
            <p class="setTop">置顶</p>
            <p class="commentTitle">{{item.title}}</p>
          </div>
          <div class="userbox">
            <span>{{item.userName}}</span>
            <div class="messageBox">
              <img class="messageImg" src="../../assets/img/message.svg" alt="">
              <span>{{item.LeavMessageNum}}</span>
            </div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import NavBar from '../../components/navbar/NavBar'
  import Scroll from '../../components/scroll/BetterScroll'

  export default {
    name: 'App',
    components: {
      NavBar,
      Scroll
    },
    data() {
      return {
        topMessage: [
          {
            title: '武汉三镇桑拿会所皆可安排 欢迎微信ha853y qq241889918',
            userName: '一爆到底',
            LeavMessageNum: 10
          }, {
            title: '武汉三镇桑拿会所皆可安排 欢迎微信ha853y qq241889918',
            userName: '一爆到底',
            LeavMessageNum: 10
          }, {
            title: '武汉三镇桑拿会所皆可安排 欢迎微信ha853y qq241889918',
            userName: '一爆到底',
            LeavMessageNum: 10
          },
        ],
      }
    },
    methods: {
      toDetail(item) {
        console.log('item=', item)
        this.$router.push({path: '/detail', query: {item: JSON.stringify(item)}})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base.css";
  #adver {
    height: 100vh;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100vw;
  }

  .extensionItem {
    width: 100%;
    background-color: yellow;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    .commentTitleBox {
      display: flex;
      flex-direction: row;
      align-items: center;

      .setTop {
        flex-shrink: 0;
        margin-left: 5px;
        padding: 2px 5px;
        background-color: green;
        border-radius: 3px;
        color: #FFF;
        margin-right: 5px;
      }

      .commentTitle {
        font-weight: bold;
        color: #ee1b2e;
        font-size: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }


    .userbox {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #A5A5A5;

      .messageBox {
        display: flex;
        flex-direction: row;
        align-items: center;

      }

      .messageImg {
        width: 16px;
        height: 16px;
      }
    }
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>
