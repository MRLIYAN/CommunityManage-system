<template>
    <div class="userInfoMage-contain">
        <div class="page-title">{{ $route.meta.title }}</div>
        <div class="bg-block">
            <div class="query-box">
                <query @searchData="searchData" @resetData="resetData" />
            </div>
            <div class="content-box">
                <CommonTable showSort height="510" :tableData="tableData" :columns="columnsList" :pagination="pagination"
                    @page-change="handlePageChange" @handleDetail="handleDetail" @handleForbidden="handleForbidden"
                    @handleStart="handleStart"></CommonTable>
            </div>
        </div>

    </div>
</template>

<script>
import query from "./component/query.vue";
import CommonTable from "@/components/CommonTable";
import UploadDialog from "@/components/UploadDialog";
export default {
    components: {
        query,
        CommonTable,
        UploadDialog,
    },
    data() {
        return {
            communityName: "",
            communityOption: [
                {
                    value: "1",
                    label: "1栋",
                },
                {
                    value: "2",
                    label: "2栋",
                },
                {
                    value: "3",
                    label: "3栋",
                },
                {
                    value: "4",
                    label: "4栋",
                },
                {
                    value: "5",
                    label: "5栋",
                },
            ],
            // 分页
            pagination: {
                pageNum: 1,
                pageSize: 10,
                total: 12,
            },

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
                    sfbdxcx: "否",
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
                    sfbdxcx: "否",
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
            columnsList: [
                {
                    prop: "name",
                    label: "微信id",
                },
                {
                    prop: "lianxi",
                    label: "头像",
                    isOperate: true,//表示改字段需要特殊操作处理
                    type: 'img'
                },
                {
                    prop: "zhengjian",
                    label: "昵称",
                },
                {
                    prop: "zjhm",
                    label: "类型",
                },
                {
                    prop: "rwgx",
                    label: "状态",
                    width: 120,
                },
                {
                    prop: "handle",
                    label: "操作",
                    width: "186",
                    isOperate: true,//表示改字段需要特殊操作处理
                    btns: [
                        {
                            eventName: "handleDetail",
                            name: "查看",
                            icon: require("@/assets/images/index/icon-detail.png")
                        },
                        {
                            eventName: "handleForbidden",
                            name: '禁用',
                            icon: require("@/assets/images/index/icon-forbidden.png"),
                            color: "#E02925",
                            judge: '是', //表示按钮需要判断是否显示，显示有条件，存储的值为表格数据要判断的值
                            judgeKey: 'sfbdxcx' //按钮判断的字段，表格行数据的字段，键，用于取值和上面的judge对比判断是否显示此按钮
                        },
                        {
                            eventName: "handleStart",
                            name: "启用",
                            icon: require("@/assets/images/index/icon-start.png"),
                            judge: '否',
                            judgeKey: 'sfbdxcx'
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        searchData() {
            let params = {
            };
        },
        resetData() {
            this.communityName = "";
            this.searchData();
        },
        commChange(val) {
            console.log(val);
        },
        // 改变页码
        handlePageChange(page) {
            this.pagination.pageNum = page;
        },
        handleDetail(row) {
            this.$router.push({
                path: "wechatUserInfoDetail",
            });
            // this.$store.commit("residentDetailsInfo", row);
        },
        handleForbidden(row) {
            this.$confirm('是否禁用该用户？', '禁用小程序用户', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'error'
            }).then(() => {
                // this.$message({
                //     type: 'success',
                //     message: '删除成功!'
                // });
            }).catch(() => {
            });
        },
        handleStart(row) {
            this.$confirm('是否启用该用户？', '启用小程序用户', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // this.$message({
                //     type: 'success',
                //     message: '删除成功!'
                // });
            }).catch(() => {
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.userInfoMage-contain {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    .right-top-query {
        position: absolute;
        top: 30px;
        right: 0;
    }

    .page-title {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        margin: 23px 0;
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

    .query-box {
        width: 100%;
    }
}
</style>
