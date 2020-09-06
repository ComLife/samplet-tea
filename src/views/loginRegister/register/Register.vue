<template>
    <div class="form-wrapper">
        <div class="backBox" @click="$router.go(-1)">
            <img src="../../../assets/img/common/whiteBack.svg" alt="">
        </div>
        <div class="header">
            注册
        </div>
        <div class="input-wrapper">
            <div class="border-wrapper">
                <input v-model="userName" type="text" name="username" class="border-item" placeholder="账号">
            </div>
            <div class="border-wrapper">
                <input v-model="password" type="password" name="password" class="border-item" placeholder="密码">
            </div>
            <div class="border-wrapper">
                <input v-model="confirmPwd" type="password" name="confirmPassword" class="border-item" placeholder="确认密码">
            </div>
        </div>
        <div class="action">
            <div class="btn" @click="registerClick">注册</div>
        </div>
    </div>
</template>

<script>
    import {register} from "../../../server/request";
    import {CODE_STATUS} from "../../../config/enum";

    export default {
        name: 'Login',
        components: {},
        data(){
            return{
                userName: '',
                password: '',
                confirmPwd: '',
            }
        },
        methods: {
            registerClick(){
                if(this.userName.length&& this.password.length){
                    if(this.password === this.confirmPwd){
                        register({
                            username: this.userName,
                            password: this.password
                        }).then((res)=>{
                            if(res.code === CODE_STATUS.success){
                                this.$router.replace({
                                    path: '/login',
                                })
                            }else{
                                this.$toast(res.msg)
                            }

                        }).catch((err)=>{
                            console.log(err)
                        })
                    }else{
                        this.$toast('两次输入的密码不一样')
                    }

                }else{
                    this.$toast('请输入账号或者密码')
                }

            },
        }
    }
</script>

<style scoped lang="scss">
    .form-wrapper {
        width: 100%;
        height: 100%;
        background-color: rgb(41, 45, 62);
        color: #fff;
        border-radius: 2px;
        padding: 50px;
        position: relative;

        .backBox{
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            top: 10px;
            left: 20px;
            >img{
                width: 30px;
                height: 30px;
            }
        }
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
</style>
