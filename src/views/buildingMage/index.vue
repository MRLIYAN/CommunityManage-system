<template>
    <div class="communityMage-contain">
        <div class="right-top-query">
            <el-select
                v-model="communityName"
                placeholder="请选择"
                size="medium"
                collapse-tags
                @change="selectChange"
            >
                <el-option
                    v-for="item in communityOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item"
                >
                </el-option>
            </el-select>
        </div>
        <div class="page-title">{{ $route.meta.title }}</div>
        <div class="bg-block">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="楼栋" name="first">
                    <building />
                </el-tab-pane>
                <el-tab-pane label="单元" name="second">
                    <unit />
                </el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<script>
import building from "./building.vue"
import unit from "./unit.vue"
export default {
    components: {
        building,
        unit
    },
    data() {
        return {
            communityName:'',
            communityOption:[
                {
                    label:'1',
                    value:'1'
                }
            ],
            activeName: '',
            show:false,
        }
    },
    created() {
        let activeName = this.$route.query.activeName || 'first'
        this.activeName = activeName 
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        selectChange(val) {
            console.log(val);
        },
    },
};
</script>

<style lang="scss" scoped>
.communityMage-contain {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    .right-top-query {
        position: absolute;
        top: 30px;
        right: 0;
    }

    .page-title {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        margin: 23px 0;
    }

    .bg-block {
        background-color: #fff;
        width: 100%;
        flex: 1;
        // padding: 24px 17px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
    }

    .content-box {
        width: 100%;
        flex: 1;
    }

    .query-box {
        width: 100%;
    }

    ::v-deep .el-tabs{
        width: 100%;

        .el-tabs__item{
            font-size: 24px;
            height: 60px;
            line-height: 60px;
            padding-left: 20px;
        }
    }
}
</style>
