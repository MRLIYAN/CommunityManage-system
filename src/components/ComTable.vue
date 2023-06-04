<template>
  <div class="comtable">
    <el-table v-bind="$attrs"
              v-on="$listeners"
              :data="tableData"
              :height="height"
              ref="multipleTable"
              border
              stripe>
      <el-table-column v-if="selectflag"
                       type="selection"
                       width="55"></el-table-column>
      <el-table-column v-if="num"
                       type="index"
                       width="55"
                       label="序号"
                       align="center">
        <template slot-scope="scope">
          <span>{{ index(scope.$index) }}</span>
        </template>
      </el-table-column>
      <el-table-column v-for="(item, index) in columns"
                       :key="index"
                       v-bind="item"
                       align="center"
                       :width="item.width || ''"
                       :fixed="item.fixed"
                       show-overflow-tooltip
                       :formatter="item.formatter">
        <template v-if="item.render"
                  v-slot="scoped">
          <!-- 使用函数式组件进行dom渲染 -->
          <render-dom :render="() => item.render(scoped.row)"></render-dom>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination_box">
      <el-pagination v-bind="$attrs"
                     @current-change="handleCurrentChange"
                     :current-page.sync="pagination.pageNum"
                     :page-size="pagination.pageSize"
                     layout="total,prev, pager, next, jumper"
                     :total="pagination.total"></el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ele-table',
  components: {
    // 函数式组件注册
    renderDom: {
      functional: true,
      props: {
        render: Function
      },
      render (createElement, renDom) {
        return <div>{renDom.props.render()}</div>
      }
    }
  },
  props: {
    border: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Object,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    num: {
      type: Boolean,
      default: false
    },
    selectflag: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  methods: {
    // 页码 改变时会触发
    handleCurrentChange (val) {
      this.$emit('page-change', val)
    }

  },

  computed: {
    // 计算 序号
    index () {
      return function (index) {
        const { pageNum, pageSize } = this.pagination
        return (pageNum - 1) * pageSize + index + 1
      }
    },
    genderFn () {
      return function (row) {
        return row.gender === 1 ? '男' : '女'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comtable {
  width: 100%;
  margin: 0 auto;

  ::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
    background-color: #EFF1F7 !important;
  }

  ::v-deep .el-table th.el-table__cell {
    background-color: #EFF1F7;
  }

  .pagination_box {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
