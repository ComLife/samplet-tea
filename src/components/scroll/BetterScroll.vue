<template>
  <div ref="wrapper" class="better-scroll-root">  <!--该节点需要定位，内容以此节点的盒模型为基础滚动。另外，该节点的背景色配合上拉加载、下拉刷新的UI，正常情况下不可作它用。-->
    <div class="content-bg better-scroll-container">  <!--如果需要调滚动内容的背景色，则改该节点的背景色-->
      <div class="pulldown-wrapper">
        <div v-show="beforePullDown">
          <span>Pull Down and refresh</span>
        </div>
        <div v-show="!beforePullDown">
          <div v-show="isPullingDown">
            <span>Loading...</span>
          </div>
          <div v-show="!isPullingDown"><span>Refresh success</span></div>
        </div>
      </div>
      <slot></slot>
      <div class="pullup-wrapper">
        <div v-if="!isPullUpLoad" class="before-trigger">
          <span class="pullup-txt">Pull up and load more</span>
        </div>
        <div v-else class="after-trigger">
          <span class="pullup-txt">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  const TIME_BOUNCE = 800;
  const TIME_STOP = 600;
  const THRESHOLD = 70;
  const STOP = 56;

  export default {
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启横向滚动
       */
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表的数据
       */
      data: {
        type: Array,
        default: () => {
          return []
        }
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pulldown: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发列表滚动开始的事件
       */
      beforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后，刷新scroll的延时。
       */
      refreshDelay: {
        type: Number,
        default: 50
      },
      /**
       * 如果启用loading交互，传递loading的状态
       * isShow: false
       * showIcon: false,    // 是否显示loading的icon
       * status: ''  // '正在加载...', '刷新成功', '刷新失败', ''
       */
      loadingStatus: {
        type: Object,
        default: function () {
          return {
            showIcon: false,
            status: ''
          };
        }
      },
      /**
       * 是否启用下拉刷新的交互
       */
      pulldownUI: {
        type: Boolean,
        default: false
      },
      /**
       * 是否启用上拉加载的交互
       */
      pullupUI: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        beforePullDown: true,
        isPullingDown: false,
        isPullUpLoad: false,
      };
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return;
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX,
          observeDOM: true,
          pullUpLoad: true,
          bounceTime: TIME_BOUNCE,
          pullDownRefresh: {
            threshold: THRESHOLD,
            stop: STOP
          }
        });

        // 是否派发滚动事件
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            if (this.listenScroll) {
              this.$emit('scroll', pos);
            }
          })
        }

        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            this.isPullUpLoad = true;
            // 滚动到底部
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('pullUp');
            }
          });
        }

        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pulldown) {
          this.beforePullDown = true;
          this.isPullingDown = false;
          this.scroll.on('pullingDown', this.pullingDownHandler)
        }

        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          });
        }
      },

      async pullingDownHandler() {
        this.beforePullDown = false;
        this.isPullingDown = true;
        // 这个位置就可以开始发送请求了
        this.$emit('pullDown');

      },

      // 上拉拉请求完成后需要回调的函数
      finishPullUp(){
        this.isPullUpLoad = false;
        this.scroll.finishPullUp();
        this.scroll.refresh();
      },

      // 下拉请求完成后需要回调的函数
      async finishPullDown() {
        this.isPullingDown = false;
        await new Promise(resolve => {
          setTimeout(() => {
            this.scroll.finishPullDown();
            resolve()
          }, TIME_STOP)
        });
        setTimeout(() => {
          this.beforePullDown = true;
          this.refresh()
        }, TIME_BOUNCE)
      },

      disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable();
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable();
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh();
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
      },
      scrollToElement() {
        // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
      }
    },
    watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      isPullUpLoad() {
        setTimeout(() => {
          this.refresh();
        }, this.refreshDelay);
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  $cube-size: 10px; // 项目中用了scss，没用的话，替换掉样式中的变量即可
  .better-scroll-root {

    .pulldown-wrapper{
      position: absolute;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      transform: translateY(-100%) translateZ(0);
      text-align: center;
      color: #999;
    }
    .pullup-wrapper{
      padding: 20px;
      text-align: center;
      color: #999;
    }

    .loading-pos {
      background-color: rgba(7, 17, 27, 0.7);
    }
    .pull-icon {
      position: absolute;
      top: 0;
      left: 30%;
      color: #a5a1a1;
      font-size: 1.5em;
      transition: all 0.15s ease-in-out;
    }
    .pull-icon .icon-rotate {
      transform:rotate(180deg);
    }


  }
</style>
