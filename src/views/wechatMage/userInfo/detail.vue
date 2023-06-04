<template>
    <div class="communityMage-contain">
        <div class="page-title">
            <span><i class="el-icon el-icon-back" @click="routerBack"></i></span>
            <span>{{ $route.meta.title }}</span>
        </div>
        <div class="bg-block">
            <div class="content-box">
                <div class="group">
                    <div class="group-title">基础信息</div>
                    <div class="group-cont">
                        <span class="left module-head">
                            <span class="label">头像</span>
                            <span class="comp">
                                <img src="@/assets/images/index/head-common.png" alt="">
                            </span>
                        </span>
                        <span class="right">
                            <span class="module">
                                <span class="label">微信ID</span>
                                <span class="comp">xxx</span>
                            </span>
                            <span class="module">
                                <span class="label">手机号</span>
                                <span class="comp"></span>
                            </span>
                            <span class="module">
                                <span class="label">昵称</span>
                                <span class="comp"></span>
                            </span>
                            <span class="module">
                                <span class="label">类型</span>
                                <span class="comp"></span>
                            </span>
                        </span>



                    </div>

                    <div class="group-cont">
                        <span class="module module-status">
                            <span class="label">状态</span>
                            <span class="comp">
                                <el-switch  style="display: block" v-model="status"
                                    active-color="#315efb" inactive-color="#f1f4fa" :active-text="activeText"
                                    inactive-text="">
                                </el-switch>
                            </span>
                        </span>
                    </div>
                </div>

                <div class="group group-table">
                    <div class="group-title">认证房屋</div>
                    <div class="group-cont">
                        <el-table
                            :data="tableData"
                            height="220"
                            ref="multipleTable"
                            striped
                        >
                            <el-table-column
                                v-for="(item, index) in columns"
                                :key="index"
                                v-bind="item"
                                align="center"
                                :width="item.width || ''"
                                show-overflow-tooltip
                                :formatter="item.formatter"
                            >
                                <template v-if="item.isOperate" v-slot="scoped">
                                    <span v-if="item.btns" class="btn-operate">
                                        <span
                                            class="handle-btn"
                                            v-for="(el, i) in item.btns"
                                            :key="i"
                                            @click="handleEvent(el, scoped.row)"
                                        >
                                            <span class="btn-font">{{ el.name }}</span>
                                        </span>
                                    </span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                </div>

            </div>
        </div>

        <el-button type="primary" size="medium">提交</el-button>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            activeText: "关闭",
            status: false,

            tableData: [
                {
                    name: "周沪斌",
                    loudonghao: "1栋",
                    duotaofangzi: "是",
                    hujidizhi: 1,
                    huji: "上海",
                    xingbie: "女",
                    hunying: "已婚",
                    lianxi: "152****8484",
                    zhengjian: "身份证",
                    zjhm: "34345******59439",
                    dy: "2单元",
                    mph: "103",
                    sfbdxcx: "是",
                    rzsh: "2022-01-13 12:00",
                    rwgx: "自住",
                    rylx: "本地人员",
                    sx: "独居老人",
                },
                {
                    name: "范美华",
                    loudonghao: "2栋",
                    duotaofangzi: "是",
                    hujidizhi: 1,
                    huji: "上海",
                    xingbie: "女",
                    hunying: "已婚",
                    lianxi: "132****9877",
                    zhengjian: "身份证",
                    zjhm: "34345******59233",
                    dy: "2单元",
                    mph: "103",
                    sfbdxcx: "是",
                    rzsh: "2022-01-13 12:00",
                    rwgx: "自住",
                    rylx: "本地人员",
                    sx: "独居老人",
                },
                {
                    name: "张纪红",
                    loudonghao: "3栋",
                    duotaofangzi: "是",
                    hujidizhi: 1,
                    huji: "上海",
                    xingbie: "女",
                    hunying: "已婚",
                    lianxi: "132****4088",
                    zhengjian: "身份证",
                    zjhm: "34345******59018",
                    dy: "2单元",
                    mph: "103",
                    sfbdxcx: "是",
                    rzsh: "2022-01-13 12:00",
                    rwgx: "自住",
                    rylx: "本地人员",
                    sx: "独居老人",
                },
                {
                    name: "周长华",
                    loudonghao: "1栋",
                    duotaofangzi: "是",
                    hujidizhi: 1,
                    huji: "上海",
                    xingbie: "男",
                    hunying: "未婚",
                    lianxi: "182****5660",
                    zhengjian: "身份证",
                    zjhm: "34345******59324",
                    dy: "2单元",
                    mph: "103",
                    sfbdxcx: "是",
                    rzsh: "2022-01-13 12:00",
                    rwgx: "自住",
                    rylx: "本地人员",
                    sx: "独居老人",
                },
                {
                    name: "陈中云",
                    loudonghao: "2栋",
                    duotaofangzi: "是",
                    hujidizhi: 1,
                    huji: "上海",
                    xingbie: "女",
                    hunying: "已婚",
                    lianxi: "152****0755",
                    zhengjian: "身份证",
                    zjhm: "34345******59638",
                    dy: "2单元",
                    mph: "103",
                    sfbdxcx: "是",
                    rzsh: "2022-01-13 12:00",
                    rwgx: "自住",
                    rylx: "本地人员",
                    sx: "独居老人",
                },
                {
                    name: "程烨",
                    loudonghao: "1栋",
                    duotaofangzi: "是",
                    hujidizhi: 1,
                    huji: "上海",
                    xingbie: "女",
                    hunying: "已婚",
                    lianxi: "133****4018",
                    zhengjian: "身份证",
                    zjhm: "34345******59132",
                    dy: "2单元",
                    mph: "103",
                    sfbdxcx: "是",
                    rzsh: "2022-01-13 12:00",
                    rwgx: "自住",
                    rylx: "本地人员",
                    sx: "独居老人",
                },
                {
                    name: "程烨",
                    loudonghao: "1栋",
                    duotaofangzi: "是",
                    hujidizhi: 1,
                    huji: "上海",
                    xingbie: "女",
                    hunying: "已婚",
                    lianxi: "133****4018",
                    zhengjian: "身份证",
                    zjhm: "34345******59132",
                    dy: "2单元",
                    mph: "103",
                    sfbdxcx: "是",
                    rzsh: "2022-01-13 12:00",
                    rwgx: "自住",
                    rylx: "本地人员",
                    sx: "独居老人",
                },
                
            ],
            columns: [
                {
                    prop: "name",
                    label: "小区",
                },
                {
                    prop: "lianxi",
                    label: "房屋",
                },
                {
                    prop: "zhengjian",
                    label: "人屋关系",
                },
                {
                    prop: "handle",
                    label: "操作",
                    width: "256",
                    isOperate: true,
                    btns: [
                        {
                            eventName: "handleDetail",
                            name: "前往",
                        },
                    ],
                },
            ],
        }
    },
    watch: {
        status() {
            if (this.status) {
                this.activeText = "启用";
            } else {
                this.activeText = "关闭";
            }
        },
    },
    methods: {
        routerBack() {
            this.$router.push({
                path: 'wechatUserInfo'
            })
        },
        handleEvent() {

        }
    }

}
</script>

<style lang="scss" scoped>
.communityMage-contain {
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
        margin-bottom: 40px;
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

        .left{
            width:400px;
            display: flex;
        }
        .right{
            flex:1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
        }
        .module {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 15px 0;
            width: 48%;
        }

        .label {
            font-size: 18px;
            font-family: PingFang SC;
            color: #262626;
            margin-right: 30px;
            width: 80px;
            text-align: right;
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

    .el-button {
        width: 200px;
        position: absolute;
        left: 20px;
        bottom:20px;
    }

    .group-table{
        margin-top: 30px;
        width:50%;
    }

    ::v-deep
        .el-table--striped
        .el-table__body
        tr.el-table__row--striped
        td.el-table__cell {
        background-color: #f6f8fd !important;
    }

    ::v-deep .el-table th.el-table__cell {
        background-color: #f6f8fd;
    }

    ::v-deep .el-table thead th {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #262626;
        height: 60px;
    }

    ::v-deep .el-table tbody td {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #333333;
    }

    ::v-deep .el-table td {
        height: 56px;
    }
    .handle-btn {
        color: blue;
        margin: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
            width: 18px;
            margin-right: 5px;
        }
    }



}
</style>
