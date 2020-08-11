<template>
  <div id="detail">
    <nav-bar class="nav-bar">
      <img slot="left" class="back" @click="backClick" src="../../assets/img/common/back.svg">
      <div slot="center">详情</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll">
      <div>
        <p class="infoTitle">{{information.title}}</p>
        <info-header style="margin-top: 10px" >
          <p slot="follow" class="follow">关注楼主</p>
          <p slot="TimeBox">2020-7-20 14:37:31</p>
        </info-header>

        <div class="commentMessage">
          <font size="4"><strong><font color="#ff00"><font face="-apple-system, BlinkSystemFont, &amp;quot;">武汉三镇会所-诚信高端外围上门170 9263 1233【微信同步】 </font></font><font color="#ff0000"><br>
            <br>
          </font><font face="-apple-system, BlinkSystemFont, &amp;quot;"><font color="#000000">伴您度过每次的浪漫旅程。不忽悠，不套路，尊重每位顾客，绝对招呼到位，以学生为主，服务为主，亦能满足您提出所有要求。 </font></font><font color="#ff0000"><br>
            <font style="background-color:yellow"><br>
            </font></font><font style="background-color:yellow">微信：170 9263 1233备注99 <font color="#ff0000"><br>
          </font>电话：170 9263 1233 夏茜 欢迎咨询预约 <font color="#ff0000"><br>
          </font>最新刚下海妹子定能给带来“香妃般的服务，帝王级的享受”！ </font><font color="#ff0000"><br>
            <br>
          </font><font color="#0000ff"><font face="-apple-system, BlinkSystemFont, &amp;quot;">引诱强奸★扯衣撕袜★舌吻吞精★扣逼互舔颜射 </font><br>
            <font face="-apple-system, BlinkSystemFont, &amp;quot;">小妹：16-24岁年轻漂亮服务热情/贴心/听话。 </font><br>
            <font face="-apple-system, BlinkSystemFont, &amp;quot;">类型：清纯/萝莉/风骚/丰满/高挑/职业型（文秘/模特）/学妹 </font><br>
            <font face="-apple-system, BlinkSystemFont, &amp;quot;">服务理念：细节决定成败，服务决定口碑。我们严把服务关，制定了严格而完善的服务监查机制。我们的口号是：慢慢选，好好看。 </font><br>
            <br>
            <font face="-apple-system, BlinkSystemFont, &amp;quot;">服务项目：可无套，舌吻，车震，野战，可2，可夜。重点可以喷潮，口活一流，不催客不事逼，懂规矩，丝袜高跟齐全，欢迎预定！欢迎加微信爆照。 </font><br>
            <br>
            <font face="-apple-system, BlinkSystemFont, &amp;quot;">我们的服务宗旨：不拿套路忽悠你，只用诚信感动你 </font></font><font color="#ff0000"><br>
            <br>
          </font><font style="background-color:yellow">电话：170 9263 1233 <font color="#ff0000"><br>
          </font>微信；170 9263 1233 </font><font color="#ff0000"><br>
            <br>
          </font><font color="#ff00ff"><font face="-apple-system, BlinkSystemFont, &amp;quot;">外围上门专区有少量妹子自带独立工作室 </font><br>
            <font face="-apple-system, BlinkSystemFont, &amp;quot;">【营业时间】全天24小时 </font><br>
            <font face="-apple-system, BlinkSystemFont, &amp;quot;">各种类型·00·01·02·03·04后·双胞胎·母女·孕妇·萝莉·白虎·洋马·职场OL·良家少妇·大长腿·大奶牛·御姐·淑女·熟女·白小纯·白富美·空姐·网红·护士·幼师·小太妹····大圈·小圈资源都有···25小时小时敬业中··一个电话安排到位！！ </font><br>
            <br>
            <font face="-apple-system, BlinkSystemFont, &amp;quot;">外围流程··客人告诉喜欢的类型··这边给您上照片··选中人·发定位房间号·安排妹子出发···需要定金100······周边县市可上门····《注明定金以外在没有见到妹子之前又要钱的均属骗子》</font></font><br>
            </strong></font>
          <br>
        </div>

        <div class="commentBox">
          <div class="commentHeader">
            <span>评论列表</span><span>(评论12)</span>
          </div>

          <div class="commentMess">
            <info-header style="margin-top: 10px" >
              <p slot="follow" class="follow">关注楼主</p>
              <p slot="TimeBox">2020-7-20 14:37:31</p>
            </info-header>
            <div class="commentText">
              伴您度过每次的浪漫旅程。不忽悠，不套路，尊重每位顾客，绝对招呼到位，以学生为主，服务为主，亦能满足您提出所有要求。&nbsp;&nbsp;微信：170 9263 1233备注55 电话：170 9263 1233 夏茜 欢迎咨询预约 最新刚下海妹子定能给带来“香妃般的服务，帝王级的享受”！&nbsp;&nbsp;引诱强奸★扯衣撕袜★舌吻吞精★扣逼互舔颜射 小妹：16-24岁年轻漂亮服务热情
            </div>
          </div>

        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import NavBar from '../../components/navbar/NavBar'
  import Scroll from '../../components/scroll/BetterScroll'
  import InfoHeader from '../../components/infoHeader/InfoHeader'
  export default {
    name: 'App',
    components: {
      NavBar,
      Scroll,
      InfoHeader
    },
    data(){
      return {
        information:''
      }
    },

    created(){
      this.information = JSON.parse(this.$route.query.item)
    },

    methods: {
      backClick() {
        this.$router.back()
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base.css";
  #detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 0;
    width: 100vw;

    .commentMessage{
      padding: 10px 15px 0;
    }

    .infoTitle{
      padding: 5px 15px 10px;
      font-size: 16px;
      font-weight: bold;
      word-break: break-all;
      line-height: 1.5;
      border-bottom: 1px solid #ddd;
    }

    .commentBox{
      border-top: 5px solid #ddd;

      .commentHeader{
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 15px;
        border-bottom: 1px solid #ddd;
      }

      .commentMess{
        border-bottom: 1px solid #ddd;
        .commentText{
          margin: 5px 15px 10px 60px;
          font-size: 16px;
          line-height: 1.5;
        }
      }
    }

    .follow{
      padding: 2px 5px;
      background-color: deepskyblue;
      font-size: 12px;
      border-radius: 3px;
      color: #fff;
      line-height: 12px;
    }
  }
</style>
