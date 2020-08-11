<template>
    <div class="form-wrapper">
        <div class="header">
            登录
        </div>
        <div class="input-wrapper">
            <div class="border-wrapper">
                <input type="text" name="username" class="border-item" placeholder="账号">
            </div>
            <div class="border-wrapper">
                <input type="password" name="password" class="border-item" placeholder="密码">
            </div>

        </div>
        <div class="action">
            <div class="btn">登录</div>
        </div>
        <div class="registerText">
            <router-link to="/register" >还没账号？去注册</router-link>
            <span>忘记密码</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        components: {}
    }
</script>

<style scoped>
    .form-wrapper {
        width: 100%;
        height: 100%;
        background-color: rgb(41, 45, 62);
        color: #fff;
        border-radius: 2px;
        padding: 50px;
    }

    .form-wrapper .header {
        text-align: center;
        font-size: 35px;
        text-transform: uppercase;
        line-height: 100px;
    }

    .form-wrapper .input-wrapper input {
        background-color: rgb(41, 45, 62);
        border: 0;
        width: 99%;
        height: 96%;
        padding: 10px;
        text-align: center;
        font-size: 15px;
        color: #fff;
        outline: none;
        border-radius: 25px;
    }

    .form-wrapper .input-wrapper input::placeholder {
        text-transform: uppercase;
    }

    .form-wrapper .input-wrapper .border-wrapper {
        background-image: linear-gradient(to right, #e8198b, #0eb4dd);
        width: 100%;
        height: 50px;
        margin-bottom: 20px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .form-wrapper .action {
        display: flex;
        justify-content: center;
    }

    .form-wrapper .action .btn {
        width: 60%;
        text-transform: uppercase;
        border: 1px solid #0e92b3;
        text-align: center;
        line-height: 40px;
        border-radius: 30px;
        cursor: pointer;
        background-color: #0e92b3;
    }
    .registerText{
        display: flex;
        justify-content: space-between;
        color: #666;
        margin-top: 30px;
    }
</style>
