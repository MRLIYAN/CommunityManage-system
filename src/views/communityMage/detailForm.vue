<template>
    <div class="detailForm-container">
        <div class="group group-top">
            <div class="group-title">基础信息</div>
            <div class="group-cont">
                <span class="module">
                    <span class="label">小区名称</span>
                    <span class="comp">xxx</span>
                </span>
                <span class="module">
                    <span class="label">备份</span>
                    <span class="comp"></span>
                </span>
                <span class="module">
                    <span class="label">地市</span>
                    <span class="comp"></span>
                </span>
                <span class="module">
                    <span class="label">县区</span>
                    <span class="comp"></span>
                </span>
                <span class="module">
                    <span class="label">街道</span>
                    <span class="comp"></span>
                </span>
                <span class="module">
                    <span class="label">社区</span>
                    <span class="comp"></span>
                </span>
            </div>

            <div class="line-h"></div>

            <div class="group-cont">
                <span class="module module-status">
                    <span class="label">状态</span>
                    <span class="comp">
                        <el-switch
                            :disabled="disabled"
                            style="display: block"
                            v-model="status"
                            active-color="#315efb"
                            inactive-color="#f1f4fa"
                            :active-text="activeText"
                            inactive-text=""
                        >
                        </el-switch>
                    </span>
                </span>
            </div>
        </div>

        <div class="group group-bottom">
            <div class="group-title">详细信息</div>
            <div class="group-cont">
                <span class="module">
                    <span class="label">详细地址</span>
                    <span class="comp">
                        <el-input
                            :disabled="disabled"
                            size="mediun"
                            v-model="address"
                            placeholder="请输入"
                        ></el-input>
                    </span>
                </span>
                <span class="module">
                    <span class="label">选择位置</span>
                    <span class="comp">
                        <el-input
                            :disabled="disabled"
                            size="mediun"
                            v-model="position"
                            placeholder="请输入"
                        ></el-input>
                    </span>
                </span>
                <span class="module module-longla">
                    <span class="label">经度</span>
                    <span class="comp">
                        <el-input
                            :disabled="disabled"
                            size="mediun"
                            v-model="longitude"
                            placeholder="请输入"
                        ></el-input>
                    </span>
                </span>
                <span class="module module-longla">
                    <span class="label">纬度</span>
                    <span class="comp">
                        <el-input
                            :disabled="disabled"
                            size="mediun"
                            v-model="latitude"
                            placeholder="请输入"
                        ></el-input>
                    </span>
                </span>
                <span class="module module-detail module-start">
                    <span class="label">详细介绍</span>
                    <span class="comp">
                        <el-input
                            :disabled="disabled"
                            type="textarea"
                            rows="4"
                            v-model="latitude"
                            placeholder="请输入内容"
                        ></el-input>
                    </span>
                </span>
                <span class="module module-upload module-start">
                    <span class="label">小区图片</span>
                    <span class="comp">
                        <el-upload
                            :disabled="disabled"
                            ref="upload"
                            :limit="4"
                            action="api/notice-info/imageUpload"
                            list-type="picture-card"
                            :before-upload="beforeAvatarUpload"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :headers="uploadImg.uploadHeaders"
                            :on-success="handleAvatarSuccess"
                            :on-exceed="handleExceed"
                            :file-list="uploadImg.titleUrl"
                        >
                            <i class="el-icon-plus"></i>
                            <div class="tips" slot="tip">
                                最多只能上传4张图片
                            </div>
                        </el-upload>
                    </span>
                </span>
            </div>
        </div>

        <el-button v-if="!disabled" type="primary" size="medium">提交</el-button>

        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: ["type"],
    data() {
        return {
            disabled: false,
            activeText: "关闭",
            status: false,
            position: "",
            address: "",
            longitude: "",
            latitude: "",

            dialogVisible: false,
            dialogImageUrl:'',

            uploadImg: {
                uploadHeaders: { token: sessionStorage.getItem("token") },
                titleUrl: [],
            },
        };
    },
    watch: {
        status() {
            if (this.status) {
                this.activeText = "启用";
            } else {
                this.activeText = "关闭";
            }
        },
    },
    mounted() {
        if (this.type == "detail") {
            this.disabled = true;
        }
    },
    methods: {
        beforeAvatarUpload(file) {
            const isLt10M = file.size / 1024 / 1024 < 2;
            console.log(isLt10M, file.size);
            if (!isLt10M) {
                this.$message.error("上传图片大小不能超过 2MB!");
            }
            return isLt10M;
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove(file, fileList) {
            let index = this.imageList.findIndex((item) => {
                return item.uid === file.uid;
            });
            if (index > -1) {
                this.ruleForm.titleUrl.splice(index, 1);
            }
        },
        handleAvatarSuccess(res, file) {
            if (res.code === 0) {
                this.ruleForm.titleUrl.push(res.data);
            } else {
                this._message("上传图片失败", "error");
            }
        },
        handleExceed() {
            this._message("只能上传四张图片", "error");
        },
    },
};
</script>

<style lang="scss" scoped>
.detailForm-container {
    width: 100%;
    height: 100%;
    padding: 0 10px;

    .group-title {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #000000;
    }

    .line-h {
        width: 100%;
        height: 1px;
        background: #eaecf1;
    }

    .group-cont {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        .module {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 15px 0;
            width: 33%;
        }

        .label {
            font-size: 18px;
            font-family: PingFang SC;
            color: #262626;
            margin-right: 30px;
            width: 80px;
            text-align: right;
        }

        .comp {
            width: 336px;
            font-size: 18px;
            color: #808080;
        }
    }

    .module-status {
        margin: 30px 0;
        .comp {
            width: auto;
        }
    }

    .group-bottom {
        .module {
            width: 30%;
        }

        .module-longla {
            width: 20%;
            .comp {
                width: 168px;
            }
        }

        .module-detail {
            width: 100%;
            .comp {
                width: 869px;
            }
        }

        .module-start {
            align-items: flex-start;
        }
    }

    .el-button {
        width: 200px;
    }
}
</style>
