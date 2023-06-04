
export const commonMixin = {
  data () {
    return {
      timer: null
    }
  },
  methods: {
    backPage () {
      this.$store.commit('IS_DATA_UPLOADFN', true) // 是否刷新当前页面数据
      this.timer = setTimeout(() => {
        this.$router.back()
      }, 1000 * 3)
    },

    _message (msg, type = 'success') {
      this.$message({
        message: msg,
        type
      })
    },

    MyConfirm (text = '确认要删除该条数据嘛？', type = 'warning') {
      return this.$confirm(text, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type
      })
    },

    myAlert (text, title = '删除') {
      this.$confirm(text, title, {
        distinguishCancelAndClose: true,
        confirmButtonText: '　确　认　',
        cancelButtonText: '　取　消　'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        })
    },
    myAlert1 (text, title = '删除') {
      return this.$confirm(text, title, {
        distinguishCancelAndClose: true,
        confirmButtonText: '　确　认　',
        cancelButtonText: '　取　消　'
      })
    },

    /**
     *
     * @param {*} arr 当前页面数据
     *
     * 当前页面如果就一条数据了,并且pageNumber 大于1 就加载上一页数据
     */
    isPreviousPage (arr, ids = []) {
      const minVal = 1
      let len = arr.length
      if (
        (len === minVal || len === ids.length) &&
        this.pagination.pageNum > minVal
      ) {
        this.pagination.pageNum--
      }
    },

    // 递归遍历 如果child是空数组 就删除
    deleteChildren (arr) {
      let childs = arr
      for (let i = childs.length; i--; i > 0) {
        if (childs[i].children) {
          if (childs[i].children.length) {
            this.deleteChildren(childs[i].children)
          } else {
            delete childs[i].children
          }
        }
      }
      return arr
    }
  },
  destroyed () {
    clearTimeout(this.timer)
    this.timer = null
  }
}
