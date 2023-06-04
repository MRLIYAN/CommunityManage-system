<template>
    <div class="communityMage-contain">
        <div class="right-top-query">
            <el-select
                v-model="communityName"
                placeholder="请选择"
                size="medium"
                collapse-tags
                @change="selectChange"
            >
                <el-option
                    v-for="item in communityOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item"
                >
                </el-option>
            </el-select>
        </div>
        <div class="page-title">{{ $route.meta.title }}</div>
        <div class="bg-block">
            <div class="query-box">
                <query
                    @searchData="searchData"
                    @resetData="resetData"
                    @importFile="importFile"
                    @addList="addList"
                />
            </div>
            <div class="content-box">
                <CommonTable
                    showSort
                    height="420"
                    :tableData="tableData"
                    :columns="columnsList"
                    :pagination="pagination"
                    @page-change="handlePageChange"
                    @handleEdit="handleEdit"
                    @handleDetail="handleDetail"
                    @handleDelete="handleDelete"
                ></CommonTable>
            </div>
        </div>

        <!-- 上传 -->
        <upload-dialog ref="uploadDialog" @upload="uploadExcel"></upload-dialog>
    </div>
</template>

<script>
import query from "./components/query.vue";
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
                    label: "住户姓名",
                },
                {
                    prop: "lianxi",
                    label: "房屋类型",
                },
                {
                    prop: "zhengjian",
                    label: "手机号",
                },
                {
                    prop: "zjhm",
                    label: "证件号",
                },
                {
                    prop: "rwgx",
                    label: "所属房屋",
                    width: 120,
                },
                {
                    prop: "入住状态",
                    label: "所属房屋",
                    width: 120,
                },
                {
                    prop: "rwgx",
                    label: "小程序绑定",
                    width: 120,
                },
                {
                    prop: "handle",
                    label: "操作",
                    width: "256",
                    isOperate: true,
                    btns: [
                        {
                            eventName:'handleDetail',
                            name:'查看',
                            icon: require("@/assets/images/index/icon-detail.png")
                        },
                        {
                            eventName:'handleEdit',
                            name:'编辑',
                            icon:require("@/assets/images/index/icon-edit.png")
                        },
                        {
                            eventName: "handleDelete",
                            name: "删除",
                            icon:require("@/assets/images/index/icon-delete.png")
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        searchData() {
            let params = {
                communityName: this.communityName,
            };
        },
        resetData() {
            this.communityName = "";
            this.searchData();
        },
        selectChange(val) {
            console.log(val);
        },
        // 改变页码
        handlePageChange(page) {
            this.pagination.pageNum = page;
        },
        importFile() {
            this.$refs.uploadDialog.showUploadDialog();
        },
        async uploadExcel(files) {
            console.log(files[0]);
            let form = new FormData();
            form.append("file", files[0].raw);
            console.log(form.get("file"));
            console.log(form);
            //接口
            // await residentUpLoad(form)
        },
        addList(){
            this.$router.push({
                path: "addResident",
            });
        },
        handleDetail(row) {
            this.$router.push({
                path: "detailResident",
            });
            // this.$store.commit("residentDetailsInfo", row);
        },
        handleEdit(row) {
            this.$router.push({
                path: "editResident",
            });
            // this.$store.commit("residentDetailsInfo", row);
        },
        handleDelete() {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                this.$message({
                    type: "success",
                    message: "删除成功!",
                });
            })
            .catch(() => {
               
            });
        },
    },
};
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
