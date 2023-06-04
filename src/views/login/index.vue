<template>
    <div class="login_box">
        <div class="login_box_right">
            <div class="form_box">
                <div class="title">用户登录</div>
                <div class="form">
                    <el-form :model="loginForm" :rules="rules" ref="loginForm">
                        <el-form-item prop="userName">
                            <el-input v-model="loginForm.userName">
                                <img src="@/assets/images/login/userName.png" slot="prefix" />
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="loginForm.password" type="password">
                                <img src="@/assets/images/login/pwd.png" slot="prefix" />
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="verifyCode">
                            <div class="verify_code">
                                <el-input v-model="loginForm.verifyCode" class="verify-code-input">
                                    <img src="@/assets/images/login/pwd.png" slot="prefix" />
                                </el-input>
                                <img class="code_img" :src="verifyCodeImg" @click="getCode" />
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <div class="pwd-operate">
                                <span class="rememberPwd">
                                    <el-checkbox v-model="checkedPwd">记住密码</el-checkbox>
                                </span>
                                <span class="forgetPwd" @click="goForget">忘记密码</span>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>

        <div class="copyright-font">
            ©2023 All rights reserved 智慧社区 (www.zhihuishequ.com) 版权所有 鲁ICP备14032095号
        </div>
    </div>
</template>

<script>
import { menuRouter } from "./menuRouter.js"
export default {
    data() {
        return {
            checkedPwd: false,
            verifyCodeImg: '',
            loginForm: {
                userName: 'admin',
                password: 'admin',
                verifyCode: '1234'
            },
            rules: {
                userName: [
                    { required: true, message: ' ', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: ' ', trigger: 'blur' }
                ],
                verifyCode: [
                    { required: true, message: ' ', trigger: 'blur' }
                ]

            }
        }
    },
    created() {
        this.getCode();
        this.getMenuList();
    },
    methods: {
        async getMenuList() {
            await setTimeout(() => {
                let menuList = menuRouter;
                console.log("==================");
                console.log(menuList);
                this.$store.dispatch('getMenuList', menuList)
            }, 500)
        },

        arrayBufferToBase64(buffer) {
            var binary = ''
            var bytes = new Uint8Array(buffer)
            var len = bytes.byteLength
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i])
            }
            return window.btoa(binary)
        },

        async getCode() {

        },

        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    sessionStorage.setItem('token', 'token')
                    await this.getMenuList()
                    this.$router.push('/')
                    return
                }
                return false
            })
        },
        goForget(){
            this.$router.push({
                path:'forgetPwd'
            })
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


            .title {
                font-size: 40px;
                font-family: PingFang SC;
                font-weight: 600;
                color: #3959D6;
                line-height: 30px;
                text-align: center;
            }

            .form {
                margin-top: 45px;

                .el-form-item {
                    margin-bottom: 30px;
                }

                img {
                    width: 20px;
                    // height: 28px;
                    margin-top: 5px;
                }

                .el-form-item--small .el-form-item__content {
                    width: 100%;

                    .el-input,
                    .el-input__inner {
                        height: 61px;
                        // text-indent: 68px;
                    }

                    .el-input__inner {
                        padding-left: 68px;
                        font-size: 20px;
                    }

                    .el-button {
                        width: 100%;
                        height: 70px;
                        background: #0077D4;
                        border-radius: 6px;
                        font-size: 25px;
                        font-weight: 400;
                        color: #FFFFFF;
                        letter-spacing: 0.8em;

                    }
                }

                .el-input__prefix {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    left: 28px;


                }

                .verify_code {
                    display: flex;
                    justify-content: space-between;
                    width: 354px;

                    .el-input__inner {
                        width: 180px;
                    }

                    .code_img {
                        width: 240px;
                        object-fit: fill;
                    }
                }
            }

            .pwd-operate {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 20px;

                .forgetPwd {
                    cursor: pointer;
                }

                .el-checkbox {
                    .el-checkbox__inner {
                        width: 20px;
                        height: 20px;
                    }

                    .el-checkbox__inner::after {
                        top: 4px;
                        left: 7px;
                    }

                    .el-checkbox__label {
                        font-size: 20px;
                    }
                }
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
