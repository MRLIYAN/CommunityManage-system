<template>
  <div class="query_form_box_dialog">
    <el-dialog :title='title' :visible.sync="dialogFormVisible" :width="dialogWidht" :top="dialogTop">
      <div class="content_box">
        <slot name="content"></slot>
      </div>
      <div slot="footer" class="dialog-footer" v-if="showBotton">
        <el-button type="primary" @click="submit">确 认</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogWidht: {
      type: String,
      default: ''
    },
    showBotton: {
      type: Boolean,
      default: true
    },
    dialogTop: {
      type: String,
      default: '30vh'
    },
    title: {
      type: String,
      default: 'title'
    }
  },
  data () {
    return {
      dialogFormVisible: false
    }
  },
  methods: {
    showDialog () {
      this.dialogFormVisible = true
    },
    submit () {
      this.$emit('submit')
      this.dialogFormVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.query_form_box_dialog {
  .content_box {
    & ::v-deep .el-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  & ::v-deep .el-dialog__footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .el-button {
      width: 102px;
    }
  }
}
</style>
