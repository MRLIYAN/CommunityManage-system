<template>
  <div class="export_dialog">
    <el-dialog title="导出" :visible.sync="exportDialogVisible" width="30%">
      {{ message }}
      <span slot="footer" class="dialog-footer">
        <el-button @click="exportDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sendExportFiles">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      exportDialogVisible: false
    }
  },
  methods: {
    showExportDialog () {
      this.exportDialogVisible = true
    },
    hideExportDialog () {
      this.exportDialogVisible = false
    },
    sendExportFiles () {
      this.hideExportDialog()
      this._message('导出成功!')
    }
  }
}
</script>

<style></style>
