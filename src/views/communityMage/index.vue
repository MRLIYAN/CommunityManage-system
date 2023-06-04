<template>
    <div class="communityMage-contain">
        <div class="page-title">{{ $route.meta.title }}</div>
        <div class="bg-block">
            <div class="query-box">
                <span class="query-block">
                    <span class="label">小区名称</span>
                    <span class="zujian">
                        <el-input size="medium" v-model="communityName" placeholder="请输入小区名称"></el-input>
                    </span>
                </span>

                <el-button size="medium" type="primary" @click="searchData">搜索</el-button>
                <el-button size="medium" @click="resetData">重置</el-button>
            </div>
            <div class="content-box">
                <CommonTable 
                    showSort 
                    height='520'
                    :tableData="tableData" 
                    :columns="columnsList" 
                    :pagination="pagination"
                    @page-change="handlePageChange" 
                    @handleEdit="handleEdit"
                    @handleDetail="handleDetail"
                ></CommonTable>
            </div>
        </div>
    </div>
</template>

<script>
import ComTable from '@/components/ComTable'
import CommonTable from '@/components/CommonTable'
export default {
    components: {
        ComTable,
        CommonTable,
    },
    data() {
        return {
            communityName: '',
            // 分页
            pagination: {
                pageNum: 1,
                pageSize: 10,
                total: 12
            },

            tableData: [
                { name: '周沪斌', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '152****8484', zhengjian: '身份证', zjhm: '34345******59439', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '范美华', loudonghao: '2栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '132****9877', zhengjian: '身份证', zjhm: '34345******59233', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '张纪红', loudonghao: '3栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '132****4088', zhengjian: '身份证', zjhm: '34345******59018', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '周长华', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '男', hunying: '未婚', lianxi: '182****5660', zhengjian: '身份证', zjhm: '34345******59324', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '陈中云', loudonghao: '2栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '152****0755', zhengjian: '身份证', zjhm: '34345******59638', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '程烨', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '133****4018', zhengjian: '身份证', zjhm: '34345******59132', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '程烨', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '133****4018', zhengjian: '身份证', zjhm: '34345******59132', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '程烨', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '133****4018', zhengjian: '身份证', zjhm: '34345******59132', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '程烨', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '133****4018', zhengjian: '身份证', zjhm: '34345******59132', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '程烨', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '133****4018', zhengjian: '身份证', zjhm: '34345******59132', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '程烨', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '133****4018', zhengjian: '身份证', zjhm: '34345******59132', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },
                { name: '程烨', loudonghao: '1栋', duotaofangzi: '是', hujidizhi: 1, huji: '上海', xingbie: '女', hunying: '已婚', lianxi: '133****4018', zhengjian: '身份证', zjhm: '34345******59132', dy: '2单元', mph: '103', sfbdxcx: '是', rzsh: '2022-01-13 12:00', rwgx: '自住', rylx: '本地人员', sx: '独居老人' },

            ],
            columnsList: [
                {
                    prop: 'name',
                    label: '小区名称',
                },
                {
                    prop: 'lianxi',
                    label: '行政区别'
                },
                {
                    prop: 'zhengjian',
                    label: '详细地址'
                },
                {
                    prop: 'zjhm',
                    label: '创建时间'
                },
                {
                    prop: 'rwgx',
                    label: '状态',
                    width: 120,
                },
                {
                    prop: 'handle',
                    label: '操作',
                    width: '176',
                    isOperate: true,
                    btns:[
                        {
                            eventName:'handleEdit',
                            name:'编辑',
                            icon:require("@/assets/images/index/icon-edit.png")
                        },
                        {
                            eventName:'handleDetail',
                            name:'查看',
                            icon: require("@/assets/images/index/icon-detail.png")
                        },
                        // {
                        //     eventName:'handleAdd',
                        //     name:'新增'
                        // },
                        // {
                        //     eventName:'handleDelete',
                        //     name:'删除'
                        // },
                    ]
                }
            ]
        }
    },
    methods: {
        searchData() {
            let params = {
                communityName: this.communityName,
            }
        },
        resetData() {
            this.communityName = "";
            this.searchData()
        },
        // 改变页码
        handlePageChange(page) {
            this.pagination.pageNum = page
        },
        handleDetail(row) {
            this.$router.push({
                path:'detailCommunity',
                query:row
            })
            // this.$store.commit('residentDetailsInfo', row)
        },
        handleEdit(row) {
            this.$router.push({
                path:'editCommunity',
                query:row
            })
            // this.$store.commit('residentDetailsInfo', row)
        },
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

    .page-title {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        margin: 23px 0;
    }

    .bg-block{
        background-color: #fff;
        width:100%;
        flex:1;
        padding:24px 17px;
        display: flex;
        justify-content:space-between;
        align-items: flex-start;
        flex-direction: column;
    }
    .content-box {
        width: 100%; flex: 1;
    }

    .query-box{
        padding-bottom: 28px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .query-block{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left:10px;
            .label{
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: 600;
                color: #262626;
                margin-right: 10px;
            }
        }
        .el-button{
            margin-left: 10px;
        }
    }


}
</style>
