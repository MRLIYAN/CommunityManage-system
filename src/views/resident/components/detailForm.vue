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

                            <el-date-picker
                                v-if="el.ele == 'dateTime'"
                                :disabled="disabled"
                                v-model="params[el.key]"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </span>
                        <span v-if="disabled" class="comp-contain">
                            {{params[el.key]}}
                        </span>
                    </span>
                </span>
            </div>
        </div>

        <el-button v-if="!disabled" type="primary" size="medium" @click="submitData">提交</el-button>
    </div>
</template>

<script>
export default {
    props: ["type", "renderEle"],
    data() {
        return {
            disabled: false,
            params: {},
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
        if(this.renderEle && this.renderEle.length>0){
            let arr = this.renderEle;
            arr.forEach(item => {
                item.eleArr.forEach(el => {
                    this.$set(this.params, el.key, '')
                })
            })
        }
    },
    methods: {
        selectChange(name,val){
            
        },
        submitData() {
            let isRequired = false;
            let arr = this.renderEle;
            arr.forEach(item => {
                item.eleArr.forEach(el => {
                    if(el.required && !this.params[el.key]){
                        isRequired = true;
                    }
                })
            })
            if(isRequired){
                this.$message({
                    message: '请完成必填项填写！',
                    type: 'warning'
                });
                return false;
            }
            console.log(this.params);
        }
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
            align-items:baseline;
            margin: 15px 0;
            width: 25%;

            .label {
                font-size: 18px;
                font-family: PingFang SC;
                color: #262626;
                margin-right: 30px;
                width: 130px;
                text-align: right;

                .required-icon{
                    font-size: 18px;
                    color:red;
                    position: relative;
                    top:3px;
                }
            }

            .comp {
                width: 226px; 
                font-size: 18px;
                color: #808080;

                ::v-deep .el-input__inner{
                    height: 36px ;
                    line-height: 36px ;
                }
                .comp-contain{
                    display: flex;
                    font-size: 18px;
                    font-family: PingFang SC;
                    color: #808080;
                    line-height: 36px;

                    &>*{
                        width: 100%;
                        // height: 36px;
                    }
                }
            }
        }
        .modulefull {
            width: 100%;

            .comp{
                width: 856px;
            }
        }
    }
    .el-button {
        width: 200px;
        position: absolute;
        left: 20px;
        bottom:10px;
    }
}
</style>
