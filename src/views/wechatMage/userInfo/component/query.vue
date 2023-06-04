<template>
    <div class="query-contain">
        <div class="query-left">
            <span class="query-block">
                <span class="label">姓名</span>
                <span class="zujian">
                    <el-input size="medium" v-model="query.name" placeholder="请输入小区名称"></el-input>
                </span>
            </span>
            <span class="query-block">
                <span class="label">电话</span>
                <span class="zujian">
                    <el-input size="medium" v-model="query.phone" placeholder="请输入小区名称"></el-input>
                </span>
            </span>
            
           

            <el-button size="medium" type="primary" @click="searchData">搜索</el-button>
            <el-button size="medium" @click="resetData">重置</el-button>
        </div>

        <div class="query-right">
            
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            query: {
                name:'',
                phone:'',
            },
        }
    },
    methods: {
        searchData() {
            this.$emit("searchData", this.query)
        },
        resetData() {
            this.$emit("resetData", this.query)
        },
        importFile(){
            this.$emit("importFile")
        },
        addList(){
            this.$emit("addList")
        },
        selectChange(name,val){
            
        }
    },
}
</script>

<style lang="scss" scoped>
.query-contain {
    width: 100%; height: 100%;
    padding-bottom: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .query-left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
    }
    .query-right{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
    }
    .query-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:7px 20px;


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

        .btn-icon{
            width: 24px; 
            vertical-align: middle;
        }
    }
}</style>