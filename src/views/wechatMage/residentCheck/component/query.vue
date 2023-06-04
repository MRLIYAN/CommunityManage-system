<template>
    <div class="query-contain">
        <div class="status-ctain">
            <span class="label">审核状态：</span>
            <span class="tabs">
                <span 
                    v-for="(item, index) in statusArr" 
                    :key="index"
                    :class="['tabs-item', tabIndex==index ? 'tabs-active' : '']"
                    @click="tabChange(item,index)"
                >
                    {{item.label}}
                </span>
            </span>
        </div>
        <div class="query-left">
            <span class="query-block">
                <span class="label">姓名</span>
                <span class="zujian">
                    <el-input
                        size="medium"
                        v-model="query.name"
                        placeholder="请输入"
                    ></el-input>
                </span>
            </span>
            <span class="query-block">
                <span class="label">电话</span>
                <span class="zujian">
                    <el-input
                        size="medium"
                        v-model="query.phone"
                        placeholder="请输入"
                    ></el-input>
                </span>
            </span>
            <span class="query-block">
                <span class="label">身份证号码</span>
                <span class="zujian">
                    <el-input
                        size="medium"
                        v-model="query.idcardNum"
                        placeholder="请输入"
                    ></el-input>
                </span>
            </span>

            <el-button size="medium" type="primary" @click="searchData"
                >搜索</el-button
            >
            <el-button size="medium" @click="resetData">重置</el-button>
        </div>

        <div class="query-right">
            <el-button type="primary" size="medium" @click="batchCheck">
                <img class="btn-icon" src="@/assets/images/index/icon-add.png" alt="">
                批量审核
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            statusArr: [
                {
                    label: "不限",
                    value: "不限",
                },
                {
                    label: "待审核",
                    value: "待审核",
                },
                {
                    label: "审核通过",
                    value: "审核通过",
                },
                {
                    label: "已拒绝",
                    value: "已拒绝",
                },
            ],
            tabIndex:0,
            checkStatus:'',
            query: {
                name: "",
                phone: "",
                idcardNum: "",
            },
        };
    },
    mounted() {
        this.checkStatus = this.statusArr[0];
    },
    methods: {
        searchData() {
            this.$emit("searchData", this.query);
        },
        resetData() {
            this.$emit("resetData", this.query);
        },
        //批量审核
        batchCheck() {
            this.$emit("batchCheck");
        },
        tabChange(item, index){
            this.tabIndex = index;
            this.checkStatus = item;
            console.log(this.checkStatus);
        }
    },
};
</script>

<style lang="scss" scoped>
.query-contain {
    width: 100%;
    height: 100%;
    padding-bottom: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .status-ctain{
        width: 100%;
        display: flex;
        justify-content:flex-start;
        align-items: center;
        border-bottom:2px solid #EAECF1;
        line-height: 60px;
        position: relative;
        top:-20px;

        .label{
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #000000;
        }
        .tabs-item{
            display: inline-block;
            font-size: 22px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #000000;
            position: relative;
            top:2px;
            line-height: 60px;
            border-bottom: 2px solid transparent;
            padding:0 20px;
            cursor: pointer;
        }

        .tabs-active{
            color:#315EFB;
            border-color: #315EFB;
        }
    
    }

    .query-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
    }
    .query-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
    }
    .query-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 7px 20px;

        .label {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 600;
            color: #262626;
            margin-right: 10px;
        }

        .zujian {
            margin: 0 5px;
        }
    }

    .el-button {
        margin-left: 10px;

        .btn-icon {
            width: 24px;
            vertical-align: middle;
        }
    }
}
</style>
