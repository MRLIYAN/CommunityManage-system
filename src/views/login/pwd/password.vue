<template>
    <div class="password-container">
        <div class="nav">
            <div class="left">
                <span class="logo">智慧社区运营平台</span>
                <span class="nav-title">{{ title }}</span>
            </div>
            <div class="right">
                <div class="return-login" @click="returnLogin">回到登录</div>
            </div>
        </div>
        <div class="cont">
            <div class="cont-box">
                <div class="title">找回密码</div>
                <div class="tabs-ctain">
                    <span v-for="(item,index) in tabs" :key="index" :class="['tabs-item', index == activeName ? 'tabs-active' : '']">{{item}}</span>
                </div>
                <div class="comp">
                    <div v-if="activeName == 0">
                        <div class="input-ctain">
                            <el-input v-model="userName" placeholder="请输入登录账号"  size="medium" >
                                <i slot="prefix" >
                                    <img src="@/assets/images/login/userName.png" alt="" class="icon" />
                                </i>
                            </el-input>
                        </div>
                        <div class="input-ctain message-input">
                            <el-input v-model="verifyCode" placeholder="请输入短信验证码" size="medium"  >
                                <i slot="prefix" >
                                    <img src="@/assets/images/login/message.png" alt="" class="icon" />
                                </i>
                            </el-input>
                            <span v-if="timeSecond > 0" class="message">{{timeSecond}}S后重新获取</span>
                            <span v-else class="message" @click="getVerificateCode">点击获取验证码</span>
                        </div>

                        <el-button type="primary" size="medium" @click="goNext">下一步</el-button>
                    </div>

                    <div v-if="activeName == 1">
                        <div class="input-ctain ">
                            <el-input placeholder="请输入新密码" v-model="newPwd" size="medium" clearable show-password>
                                <i slot="prefix" >
                                    <img src="@/assets/images/login/pwd.png" alt="" class="icon" />
                                </i>
                            </el-input>
                        </div>
                        <div class="input-ctain">
                            <el-input placeholder="请再次输入新密码" v-model="newPwdAgain" size="medium" show-password>
                                <i slot="prefix" >
                                    <img src="@/assets/images/login/pwd.png" alt="" class="icon" clearable show-password/>
                                </i>
                            </el-input>
                        </div>

                        <el-button type="primary" size="medium" @click="goNext">下一步</el-button>
                    </div>

                    <div v-if="activeName == 2">
                        <div class="success-ctain">
                            <i class="el-icon el-icon-circle-check"></i>
                            <span class="success">
                                密码重置成功，请重新登录！
                            </span>
                            <el-button type="primary" @click="returnLogin">返回登录</el-button>
                        </div>  
                    </div>
                </div>
                        

                        
            </div>
        </div>

        <div class="copyright-font">
            ©2023 All rights reserved 智慧社区 (www.zhihuishequ.com) 版权所有 鲁ICP备14032095号
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: '重置密码'
        }
    },
    data() {
        return {
            tabs:[
                '①手机号码验证','②设置新密码','③密码重置成功'
            ],
            activeName:0,
            timeSecond:0,
            userName:'',
            verifyCode:'',
            newPwd:'',
            newPwdAgain:'',
        }
    },
    methods: {
        handleClick(){
            return false;
        },
        returnLogin() {
            this.$router.push('login')
        },
        goNext() {
            let num = this.activeName;
            if(num == 0) {
                if(!this.userName || !this.verifyCode) {
                    this.$message({
                        message: '用户名和账号不能为空！',
                        type: 'warning'
                    });
                    return false;
                }
            }else if(num == 1){
                if(!this.newPwd || !this.newPwdAgain) {
                    this.$message({
                        message: '密码不能为空！',
                        type: 'warning'
                    });
                    return false;
                }
                if(this.newPwd !== this.newPwdAgain) {
                    this.$message({
                        message: '两次密码不一致！',
                        type: 'warning'
                    });
                    return false;
                }
            }
            this.activeName = this.activeName + 1;
        },
        getVerificateCode() {
            this.timeSecond = 60;
            let interval = setInterval(() => {
                if(this.timeSecond > 0){
                    this.timeSecond = this.timeSecond - 1;
                }else{
                    clearInterval(interval)
                }
            },1000)
        },
    },
}
</script>

<style lang="scss" scoped>
.password-container {
    width: 100%;
    height: 100%;
    position: relative;

    .nav {
        width: 100%;
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;

        .logo {
            font-size: 28px;
            font-family: YouSheBiaoTiHei;
            font-weight: 400;
            color: #315EFB;
            margin-left: 29px;
            margin-right: 30px;
        }

        .nav-title {
            display: inline-block;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #414860;
            border-left: 2px solid #414860;
            padding-left: 20px;
            line-height: 20px;
        }

        .right {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .return-login {
                width: 108px;
                height: 46px;
                text-align: center;
                line-height: 46px;
                background: #315EFB;
                border-radius: 4px;
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: 600;
                color: #FFFFFF;
                margin-right: 41px;
                cursor: pointer;
            }
        }
    }

    .cont {
        background-color: #f1f4fa;
        width: 100%;
        height: calc(100% - 72px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cont-box {
        width: 731px;
        height: 590px;
        background: #FFFFFF;
        box-shadow: 0px 3px 60px 0px rgba(80, 110, 228, 0.13);
        border-radius: 8px;
        padding:47px 60px;

        .title{
            font-size: 36px;
            font-weight: bold;
            color: #000000;
            text-align: center;
        }
    }
    .tabs-ctain{
        margin-top: 42px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #ccc;
    }

    .tabs-item{
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #828282;
        line-height: 40px;
        border-bottom: 2px solid transparent;
        position: relative;
        top:2px;
    }
    .tabs-active{
        border-color:#315efb;
        color: #315efb !important;
    }
    .comp{
        padding:0 80px;
        padding-top: 48px;
    }

    .input-ctain{
        margin-bottom: 22px;
        position: relative;

        ::v-deep .el-input__inner{
            height: 60px;
            line-height: 60px;
            padding-left: 60px;
        }

        ::v-deep .el-input__prefix{
            left: 20px;
            top:0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .message{
            position: absolute;
            top:50%;
            right: 20px;
            transform: translate(0,-50%);
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #315EFB;
            cursor: pointer;
        }

    }

    .success-ctain{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:100%; height: 100%;

        .el-icon{
            font-size: 140px;
            color:rgb(56, 211, 18);
        }

        .success{
            font-size: 20px;
            margin-top: 20px;
        }
    }

    .el-button{
        width:100%;
        margin-top:70px;
        height: 70px;
        font-size: 25px;
    }
    .success-ctain .el-button{
        margin-top:40px;
    }
    ::v-deep .message-input .el-input__inner {
        padding-right: 150px;
    }

   

    .copyright-font {
        width: 100%;
        margin-top: -70px;
        font-size: 20px;
        font-weight: 400;
        color: #808080;
        text-align: center;
    }



}
</style>