<template>
    <div class="query-contain">
        <div class="query-left">
            <span class="query-block">
                <span class="label">所属</span>
                <span class="zujian">
                    <el-select v-model="query.sele" placeholder="请选择" collapse-tags @change="selectChange('sele', query.sele)">
                        <el-option v-for="item in query.seleOptions" :key="item.value" :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                </span>
                <span class="zujian">
                    <el-select v-model="query.sele2" placeholder="请选择" collapse-tags  @change="selectChange('sele2', query.sele2)">
                        <el-option v-for="item in query.sele2Options" :key="item.value" :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                </span>
            </span>
            <span class="query-block">
                <span class="label">单元名称</span>
                <span class="zujian">
                    <el-input size="medium" v-model="query.dyName" placeholder="请输入小区名称"></el-input>
                </span>
            </span>

            <el-button size="medium" type="primary" @click="searchData">搜索</el-button>
            <el-button size="medium" @click="resetData">重置</el-button>
        </div>

        <div class="query-right">
            <el-button type="primary" size="medium" @click="addList">
                <img class="btn-icon" src="@/assets/images/index/icon-add.png" alt="">
                新增
            </el-button>
            <el-button type="primary" size="medium" @click="importFile">
                <img class="btn-icon" src="@/assets/images/index/icon-import.png" alt="">
                导入
            </el-button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            query: {
                sele: '',
                seleOptions: [{
                    value: '1',
                    label: '1栋'
                }, {
                    value: '2',
                    label: '2栋'
                }, {
                    value: '3',
                    label: '3栋'
                }, {
                    value: '4',
                    label: '4栋'
                }, {
                    value: '5',
                    label: '5栋'
                }],
                sele2: '',
                sele2Options: [{
                    value: '1',
                    label: '1栋'
                }, {
                    value: '2',
                    label: '2栋'
                }, {
                    value: '3',
                    label: '3栋'
                }, {
                    value: '4',
                    label: '4栋'
                }, {
                    value: '5',
                    label: '5栋'
                }],

                dyName:''
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
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .query-left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
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
        margin-left: 10px;


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