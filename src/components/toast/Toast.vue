<template>

    <!-- 全局提示框 -->
    <div v-show="visible" class="dialog-tips dialog-center">
        <div>{{message}}</div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                visible: false,
                message: ""
            };
        }
    };
</script>
<style lang="scss">
    .dialog-tips{
        position: fixed;
        z-index: 1000;
        min-width: 220px;
        max-width: 400px;
        padding: 22px 22px;
        word-break: break-all;
        box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.1);
        text-align: center;
        color: #fff;
        background-color: rgba(0,0,0,0.8);
        border-radius: 10px;
        line-height: 1.5;
        .dialog-tips-icon{
            width: 54px;
            height: 54px;
            display: inline-block;
            margin-bottom: 13px;
        }
    }
    .dialog-center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

</style>