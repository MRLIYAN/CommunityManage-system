<template>
    <div class="comtable">
        <el-table
            v-bind="$attrs"
            v-on="$listeners"
            :data="tableData"
            :height="height"
            ref="multipleTable"
            striped
            @selection-change="handleSelectionChange"
        >
            <el-table-column
                v-if="selectflag"
                type="selection"
                width="55"
            ></el-table-column>
            <el-table-column
                v-if="showSort"
                type="index"
                width="55"
                label="序号"
                align="center"
            >
                <template slot-scope="scope">
                    <span>{{ index(scope.$index) }}</span>
                </template>
            </el-table-column>
            <el-table-column
                v-for="(item, index) in columns"
                :key="index"
                v-bind="item"
                align="center"
                :width="item.width || ''"
                :fixed="item.fixed"
                show-overflow-tooltip
                :formatter="item.formatter"
            >
                <template v-if="item.isOperate" v-slot="scoped">
                    <span v-if="item.btns" class="btn-operate">
                        <span
                            class="handle-btn"
                            v-for="(el, i) in filterBtn(item.btns, scoped.row)"
                            :key="i"
                            @click="handleEvent(el, scoped.row)"
                        >
                            <img v-if="el.icon" :src="el.icon || ''" alt="" />
                            <span class="btn-font" :style="{color:el.color}">{{ el.name }}</span>
                        </span>
                    </span>
                    <img v-if="item.type == 'img'" src="@/assets/images/index/icon-delete.png"  style="width:40px; height:40px;" alt="" />
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination_box">
            <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="pagination.pageNum"
                :page-size="pagination.pageSize"
                layout="total,prev, pager, next, jumper"
                :total="pagination.total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "ele-table",
    props: {
        border: {
            type: Boolean,
            default: true,
        },
        stripe: {
            type: Boolean,
            default: true,
        },
        columns: {
            type: Array,
            default: () => [],
        },
        pagination: {
            type: Object,
            default: () => [],
        },
        tableData: {
            type: Array,
            default: () => [],
        },
        showSort: {
            type: Boolean,
            default: false,
        },
        selectflag: {
            type: Boolean,
            default: false,
        },
        height: {
            type: String,
            default: "100%",
        },
    },
    data() {
        return {
            // btnAttr: {
            //     handleEdit:{
            //         icon:require("@/assets/images/index/icon-edit.png")
            //     },
            //     handleDetail:{
            //         icon: require("@/assets/images/index/icon-detail.png")
            //     },
            //     handleDelete:{
            //         icon: require("@/assets/images/index/icon-delete.png")
            //     },
            //     handleForbidden:{
            //         icon: require("@/assets/images/index/icon-forbidden.png"),
            //         color: "#E02925",
            //     },
            //     handleStart:{
            //         icon: require("@/assets/images/index/icon-start.png")
            //     },
            //     handleCheck:{
            //         icon: require("@/assets/images/index/icon-check.png")
            //     },
            // },
        };
    },
    methods: {
        filterBtn(btns,row) {
            let arr = [];
            for (let i = 0; i < btns.length; i++) {
                let item = btns[i];
                //有judge，表示此按钮需要通过数据判断是否显示
                if(item.judge){
                    //judgeKey，维护的字段，和表格行数据要判断按钮是否显示的字段值，也就是键对应，手动维护
                    //judge，存储的需要判断的值，
                    //比如status == 1的按钮要显示，那就judge为1；judgeKey为status
                    if(row[item.judgeKey] == item.judge){
                        arr.push(item)
                    }
                }else{
                    arr.push(item)
                }
            }
            return arr;
        },
        // 页码 改变时会触发
        handleCurrentChange(val) {
            this.$emit("page-change", val);
        },
        handleEvent(item, row) {
            this.$emit(item.eventName, row)
        },
        handleSelectionChange(val){
            this.$emit('tableSelectChange', val)
            console.log(val);
        }
    },

    computed: {
        // 计算 序号
        index() {
            return function(index) {
                const { pageNum, pageSize } = this.pagination;
                return (pageNum - 1) * pageSize + index + 1;
            };
        },
        // genderFn() {
        //     return function(row) {
        //         return row.gender === 1 ? "男" : "女";
        //     };
        // },
    },
};
</script>

<style lang="scss" scoped>
.comtable {
    width: 100%;
    margin: 0 auto;

    .el-table{

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

    .pagination_box {
        width: 100%;
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ::v-deep .el-pager .number {
        background-color: #fff;
        border: 1px solid #e9ecf1;
    }

    .btn-operate{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
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
