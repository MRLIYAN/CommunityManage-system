<template>
    <div class="login_box">
        <div class="login_box_right">
            <div class="form_box">
                <span class="title">验证码确认</span>
                <span class="tip">登录需要进行验证码确认，请通过手机接受验证码</span>
                <span v-if="isSend" class="isSend">验证码已发送</span>
                <span class="validate">
                    <validateCode v-model="verifyCode"/>
                </span>

                <span v-if="timeSecond > 0" class="time">{{timeSecond}}S后可重新获取验证码</span>
                <span v-else class="time verify" @click="getVerifyCode">点击获取验证码</span>

                <el-button type="primary" @click="verifyOk">确定</el-button>
            </div>
        </div>

        <div class="copyright-font">
            ©2023 All rights reserved 智慧社区 (www.zhihuishequ.com) 版权所有 鲁ICP备14032095号
        </div>
    </div>
</template>

<script>
import validateCode from "./components/validateCode.vue"
export default {
    components:{
        validateCode
    },
    data() {
        return {
            timeSecond:0,
            isSend:false,
            verifyCode:'',
        }
    },
    created() {
    },
    methods: {
        getVerifyCode() {
            this.isSend = true;

            this.timeSecond = 60;
            let interval = setInterval(() => {
                if(this.timeSecond > 0){
                    this.timeSecond = this.timeSecond - 1;
                }else{
                    clearInterval(interval)
                }
            },1000)
        },
        verifyOk() {
            console.log(this.verifyCode);
            if(!this.verifyCode){
                this.$message({
                    message: '验证码不能为空！',
                    type: 'error'
                });
                return false;
            }
            if(this.verifyCode.length < 6){
                this.$message({
                    message: '请输入完整验证码！',
                    type: 'error'
                });
                return false;
            }
            alert(this.verifyCode)
        }
    }
}
</script>

<style lang="scss">
.login_box {
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/images/login/login-bg.png');
    background-size: 100% 100%;
    position: relative;

    * {
        box-sizing: border-box;
    }


    .login_box_right {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .form_box {
            width: 730px;
            height: 590px;
            background-color: #fff;
            padding: 72px 140px 45px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;


            .title {
                font-size: 40px;
                font-family: PingFang SC;
                font-weight: 600;
                color: #3959D6;
                line-height: 30px;
                text-align: center;
            }

            .tip{
                font-size: 20px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #525151;
                margin-top: 54px;
            }

            .isSend{
                font-size: 26px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #525151;
                margin-top: 44px;
            }

            .validate{
                margin-top: 10px;
            }

            .time{
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #D5D8DA;
                cursor: pointer;
                margin: 10px 0;
            }
            .verify{
                color:#315EFB;
            }

            .el-button{
                margin-top:20px;
                width: 100%;
                height: 70px;
                font-size: 25px;
            }


                
        }

    }

    .copyright-font {
        width:100%;
        margin-top: -70px;
        font-size: 20px;
        font-weight: 400;
        color: #808080;
        text-align: center;
    }
}</style>
