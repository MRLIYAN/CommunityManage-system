<template>
    <div class="detailForm-contain">
        <div class="page-title">
            <span><i class="el-icon el-icon-back" @click="routerBack"></i></span>
            <span>{{ $route.meta.title }}</span>
        </div>
        <div class="bg-block">
            <div class="content-box">
                <div class="group">
                    <div class="group-title">基础信息</div>
                    <div class="group-cont">
                        <ul>
                            <li class="module module-head module-full">
                                <span class="label">头像</span>
                                <span class="comp">
                                    <img src="@/assets/images/index/head-common.png" alt="">
                                </span>
                            </li>
                            <li class="module">
                                <span class="label">真实姓名</span>
                                <span class="comp">
                                    张三丰
                                </span>
                            </li>
                            <li class="module">
                                <span class="label">性别</span>
                                <span class="comp">
                                    张三丰
                                </span>
                            </li>
                            <li class="module">
                                <span class="label">证件类型</span>
                                <span class="comp">
                                    张三丰
                                </span>
                            </li>
                            <li class="module">
                                <span class="label">证件号码</span>
                                <span class="comp">
                                    张三丰
                                </span>
                            </li>
                            <li class="module">
                                <span class="label">手机号码</span>
                                <span class="comp">
                                    张三丰
                                </span>
                            </li>
                            <li class="module">
                                <span class="label">人屋关系</span>
                                <span class="comp">
                                    张三丰
                                </span>
                            </li>
                            <li class="module">
                                <span class="label">户籍地址</span>
                                <span class="comp">
                                    张三丰
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="group group-bottom">
                    <div>
                        <div class="group-title">认证房屋</div>
                        <div class="group-cont">
                            <ul>
                                <li class="module">
                                    <span class="label">小区</span>
                                    <span class="comp">
                                        张三丰
                                    </span>
                                </li>
                                <li class="module">
                                    <span class="label">房屋</span>
                                    <span class="comp">
                                        张三丰
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div class="group-title">审核信息</div>
                        <div class="group-cont">
                            <ul>
                                <li class="module">
                                    <span class="label">审核结果</span>
                                    <span class="comp">
                                        通过
                                    </span>
                                </li>
                                <li class="module">
                                    <span class="label">审核时间</span>
                                    <span class="comp">
                                        张三丰
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

        <div class="btn-group" v-if="type == 'check'">
            <el-button type="danger" size="medium">拒绝</el-button>
            <el-button type="primary" size="medium">通过</el-button>
        </div>
    </div>
</template>

<script>
export default {
    props:['type'],
    data() {
        return {
            disabled:false,
        }
    },
    mounted() {
        if (this.type == "detail") {
            this.disabled = true;
        }
    },
    methods: {
        routerBack() {
            this.$router.push('residentCheck')
        },
    }

}
</script>

<style lang="scss" scoped>
.detailForm-contain {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    .page-title {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        margin: 23px 0;

        .el-icon {
            cursor: pointer;
        }
    }

    .bg-block {
        background-color: #fff;
        width: 100%;
        flex: 1;
        padding: 24px 17px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
    }

    .content-box {
        width: 100%;
        flex: 1;
    }

    .group-title {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #000000;
        margin-bottom: 20px;
    }

    .line-h {
        width: 100%;
        height: 1px;
        background: #eaecf1;
    }

    .group-cont {
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin-bottom: 20px;
        ul{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
        }

        .module {
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            margin: 15px 0;
            width: 48%;
        }
        .module-full{
            width: 100%;
        }
        .module-head{
            align-items: flex-start;
        }

        .label {
            font-size: 18px;
            font-family: PingFang SC;
            color: #262626;
            margin-right: 30px;
            width: 80px;
            text-align: right;
            // font-weight: 600;
        }

        .comp {
            display: flex;
            width: 336px;
            font-size: 18px;
            color: #808080;
        }

        .module-head img {
            width: 100px;
            height: 100px;
            border-radius: 0;
        }
    }

    .group-bottom{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .module{
            width: 100%;
        }
    }

    .btn-group{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        left: 20px;
        bottom:20px;
    }
    .el-button {
        width: 200px;
      
    }




}
</style>
