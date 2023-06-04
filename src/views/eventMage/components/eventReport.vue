<template>
    <div class="eventReoprt-container">
        <div class="group">
            <div class="group-cont">
                <span class="module">
                    <span class="label">小区</span>
                    <span class="comp">
                        <el-select v-model="community" placeholder="请选择" collapse-tags @change="selectChange('community', community)">
                        <el-option v-for="item in communityOptions" :key="item.value" :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                    </span>
                </span>
                <span class="module">
                    <span class="label">场景</span>
                    <span class="comp">
                        <el-select v-model="scene" placeholder="请选择" collapse-tags @change="selectChange('scene', scene)">
                        <el-option v-for="item in sceneOptions" :key="item.value" :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                    </span>
                </span>
                <span class="module module-longla">
                    <span class="label">地址</span>
                    <span class="comp">
                        <el-input
                            size="mediun"
                            v-model="address"
                            placeholder="请输入"
                        ></el-input>
                    </span>
                </span>
                <span class="module module-upload module-start">
                    <span class="label">小区图片</span>
                    <span class="comp">
                        <el-upload
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

        <div class="btn-group">
            <el-button type="" size="medium" @click="goCancel">取消</el-button>
            <el-button type="primary" size="medium" @click="goReport">上报</el-button>
        </div>

        <el-dialog :visible.sync="dialogVisible" append-to-body>
            <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: ["type"],
    data() {
        return {
            community: '',
            communityOptions: [{
                value: '1',
                label: '1栋'
            }, {
                value: '2',
                label: '2栋'
            }, {
                value: '3',
                label: '3栋'
            }, {
                value: '4',
                label: '4栋'
            }, {
                value: '5',
                label: '5栋'
            }],
            scene: '',
            sceneOptions: [{
                value: '1',
                label: '1栋'
            }, {
                value: '2',
                label: '2栋'
            }, {
                value: '3',
                label: '3栋'
            }],

            address:'',

            dialogVisible: false,
            dialogImageUrl:'',
            uploadImg: {
                uploadHeaders: { token: sessionStorage.getItem("token") },
                titleUrl: [],
            },
        };
    },
    methods: {
        selectChange(name,val){
            
        },
        goCancel() {
            this.$emit('dialogCancel')
        },
        goReport() {

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
                this.uploadImg.titleUrl.splice(index, 1);
            }
        },
        handleAvatarSuccess(res, file) {
            if (res.code === 0) {
                this.uploadImg.titleUrl.push(res.data);
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
.eventReoprt-container {
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
            width: 50%;
        }
        .module-upload{
            width: 100%;
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
            // width: 306px;
            font-size: 18px;
            color: #808080;
        }
    }

    
    .btn-group{
        display: flex;
        justify-content: center;
        align-items: center;
        .el-button{
            width: 120px;
        }
    }


    
}
</style>
