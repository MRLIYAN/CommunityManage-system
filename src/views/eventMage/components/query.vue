<template>
    <div class="query-contain">
        <div class="query-left">
            <span class="query-block">
                <span class="label">事件编号</span>
                <span class="zujian">
                    <el-input size="medium" v-model="query.eventNo" placeholder="请输入"></el-input>
                </span>
            </span>
            <span class="query-block">
                <span class="label">小区</span>
                <span class="zujian">
                    <el-select v-model="query.community" placeholder="请选择" collapse-tags @change="selectChange('community', query.community)">
                        <el-option v-for="item in query.communityOptions" :key="item.value" :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                </span>
            </span>
            <span class="query-block">
                <span class="label">场景</span>
                <span class="zujian">
                    <el-select v-model="query.scene" placeholder="请选择" collapse-tags @change="selectChange('scene', query.scene)">
                        <el-option v-for="item in query.sceneOptions" :key="item.value" :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                </span>
            </span>
            <span class="query-block">
                <span class="label">提交类型</span>
                <span class="zujian">
                    <el-select v-model="query.tjtype" placeholder="请选择" collapse-tags @change="selectChange('tjtype', query.tjtype)">
                        <el-option v-for="item in query.tjtypeOptions" :key="item.value" :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                </span>
            </span>
            <span class="query-block">
                <span class="label">处理状态</span>
                <span class="zujian">
                    <el-select v-model="query.status" placeholder="请选择" collapse-tags @change="selectChange('status', query.status)">
                        <el-option v-for="item in query.statusOptions" :key="item.value" :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                </span>
            </span>
            <span class="query-block">
                <span class="label">时间范围</span>
                <span class="zujian">
                    <el-date-picker
                        v-model="query.timeRange"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </span>
            </span>
           

            <el-button size="medium" type="primary" @click="searchData">搜索</el-button>
            <el-button size="medium" @click="resetData">重置</el-button>
        </div>

        <div class="query-right">
            <el-button type="primary" size="medium" @click="importFile">
                <img class="btn-icon" src="@/assets/images/index/icon-import.png" alt="">
                事件上报
            </el-button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            query: {
                eventNo:'',

                community: '',
                communityOptions: [{
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
                scene: '',
                sceneOptions: [{
                    value: '1',
                    label: '1栋'
                }, {
                    value: '2',
                    label: '2栋'
                }, {
                    value: '3',
                    label: '3栋'
                }],

                tjtype: '',
                tjtypeOptions: [{
                    value: '1',
                    label: '1栋'
                }, {
                    value: '2',
                    label: '2栋'
                }, {
                    value: '3',
                    label: '3栋'
                }],

                status: '',
                statusOptions: [{
                    value: '1',
                    label: '1栋'
                }, {
                    value: '2',
                    label: '2栋'
                }, {
                    value: '3',
                    label: '3栋'
                }],

                timeRange:'',

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
            this.$emit("eventImport")
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
        width: 90%;
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