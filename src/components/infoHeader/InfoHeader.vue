<template>
  <div id="info-header">
    <div>
      <img class="avatar" src="../../assets/img/noavatar_middle.gif" alt="">
    </div>
    <div class="infoBox">
      <div class="louzuBox">
        <p class="userName">一爆到底</p>
        <div class="followBox">
          <slot name="follow"></slot>
        </div>
      </div>
      <div class="infoMe">
        <div>
          <slot name="TimeBox"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoHeader"
  }
</script>

<style scoped lang="scss">
  #info-header {
    display: flex;
    align-items: center;
    height: 55px;
    padding: 0 15px;
    .avatar{
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }

    .infoBox{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      font-size: 14px;
      padding-left: 10px;
      flex: 1;

      .louzuBox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .userName{
          color: #333;
          font-weight: bold;
        }

        .followBox{
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          flex: 1;

          .follow{
            padding: 2px 5px;
            background-color: deepskyblue;
            font-size: 12px;
            border-radius: 3px;
            color: #fff;
            line-height: 12px;
          }
        }
      }

      .infoMe{
        color: #ccc;
      }
    }
  }

</style>
