<template>
    <div class="detailForm-container">
        <div class="group" v-for="(item, index) in renderEle" :key="index">
            <div class="group-title">{{ item.title }}</div>
            <div class="group-cont">
                <span
                    :class="['module', 'module' + el.style]"
                    v-for="(el, i) in item.eleArr"
                    :key="i"
                >
                    <span class="label">
                        <span v-if="el.required" class="required-icon">*</span>
                        {{ el.label }}
                    </span>
                    <span class="comp">
                        <span v-if="!disabled" class="comp-contain">
                            <el-input
                                v-if="el.ele == 'input'"
                                :disabled="disabled"
                                size="mediun"
                                v-model="params[el.key]"
                                placeholder="请输入"
                            ></el-input>

                            <el-input
                                v-if="el.ele == 'textarea'"
                                :disabled="disabled"
                                type="textarea"
                                rows="5"
                                v-model="params[el.key]"
                                placeholder="请输入内容"
                            ></el-input>

                            <el-select
                                v-if="el.ele == 'select'"
                                :disabled="disabled"
                                v-model="params[el.key]"
                                placeholder="请选择"
                                size="medium"
                                collapse-tags
                                @change="selectChange(el.key, params[el.key])"
                            >
                                <el-option
                                    v-for="op in el.option"
                                    :key="op.value"
                                    :label="op.label"
                                    :value="op"
                                >
                                </el-option>
                            </el-select>
                        </span>
                        <el-upload
                            v-if="el.ele == 'uploadImg'"
                            :disabled="disabled"
                            ref="upload"
                            :limit="4"
                            action="api/notice-info/imageUpload"
                            list-type="picture-card"
                            :before-upload="beforeAvatarUpload"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :headers="uploadHeaders"
                            :on-success="handleAvatarSuccess"
                            :on-exceed="handleExceed"
                            :file-list="params[el.key]"
                        >
                            <i class="el-icon-plus"></i>
                            <div class="tips" slot="tip">
                                最多只能上传4张图片
                            </div>
                        </el-upload>
                        <!-- 上传图片不在此显示 -->
                        <span v-if="disabled && el.ele!='uploadImg'" class="comp-contain">
                            {{ params[el.key] }}
                        </span>
                    </span>
                </span>
            </div>
        </div>

        <el-button
            v-if="!disabled"
            type="primary"
            size="medium"
            @click="submitData"
            >提交</el-button
        >

        <!-- 预览图片 -->
        <el-dialog :visible.sync="dialogVisible" style="margin-top:0;">
            <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: ["type", "renderEle"],
    data() {
        return {
            disabled: false,
            dialogVisible: false,
            dialogImageUrl:'',
            uploadHeaders: { token: sessionStorage.getItem("token") },
            params: {
                uploadImg:[],
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
    created() {
        if (this.type == "detail") {
            this.disabled = true;
        }
        if (this.renderEle && this.renderEle.length > 0) {
            let arr = this.renderEle;
            arr.forEach((item) => {
                item.eleArr.forEach((el) => {
                    this.$set(this.params, el.key, "");
                });
            });
            this.params.uploadImg = [];
        }
    },
    methods: {
        selectChange(name, val) {},
        submitData() {
            let isRequired = false;
            let arr = this.renderEle;
            arr.forEach((item) => {
                item.eleArr.forEach((el) => {
                    if (el.required && !this.params[el.key]) {
                        isRequired = true;
                    }
                });
            });
            if (isRequired) {
                this.$message({
                    message: "请完成必填项填写！",
                    type: "warning",
                });
                return false;
            }
            console.log(this.params);
        },

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
    position: relative;

    .group-title {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #000000;
    }

    .group-cont {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        .module {
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            margin: 15px 0;
            width: 33%;

            .label {
                font-size: 18px;
                font-family: PingFang SC;
                color: #262626;
                margin-right: 30px;
                width: 130px;
                text-align: right;

                .required-icon {
                    font-size: 18px;
                    color: red;
                    position: relative;
                    top: 3px;
                }
            }

            .comp {
                width: 336px;
                font-size: 18px;
                color: #808080;

                ::v-deep .el-input__inner {
                    height: 36px;
                    line-height: 36px;
                }
                .comp-contain {
                    display: flex;
                    font-size: 18px;
                    font-family: PingFang SC;
                    color: #808080;

                    & > * {
                        width: 100%;
                        // height: 36px;
                    }
                }
            }
        }
        .modulefull {
            width: 100%;

            .comp {
                width: 856px;
            }
        }
    }
    .el-button {
        width: 200px;
        position: absolute;
        left: 20px;
        bottom: 10px;
    }
}
</style>
