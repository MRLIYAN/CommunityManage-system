<template>
    <div class="upload_dialog">
        <el-dialog
            title="批量新增"
            :visible.sync="uploadDialogVisible"
            width="30%"
        >
            <el-upload
                :auto-upload="false"
                ref="upload"
                accept=".xls, .xlsx"
                action="https://jsonplaceholder.typicode.com/posts/"
                :file-list="fileList"
            >
                <el-button size="small" type="primary">上传</el-button>
                <div slot="tip" class="el-upload__tip">
                    只能上传excel/xls/xlsx文件
                </div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button @click="uploadDialogVisible = false"
                    >取 消</el-button
                >
                <el-button type="primary" @click="sendUpload">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            uploadDialogVisible: false,
            fileList: [],
        };
    },
    methods: {
        showUploadDialog() {
            this.uploadDialogVisible = true;
        },
        hideUploadDialog() {
            this.uploadDialogVisible = false;
        },
        sendUpload() {
            let files = this.$refs.upload.uploadFiles;
            this.$emit("upload", files);
            this.hideUploadDialog();
            this._message("上传成功");
        },
    },
    watch: {
        uploadDialogVisible(val) {
            if (!val) {
                this.fileList = [];
            }
        },
    },
};
</script>

<style></style>
