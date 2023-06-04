<template>
    <div class="communityMage-contain">
        <div class="page-title">
            <span><i class="el-icon el-icon-back" @click="routerBack"></i></span>
            <span>{{ $route.meta.title }}</span>
        </div>
        <div class="bg-block">
            <div class="content-box">
                <detailForm type="detail" :renderEle="renderEle" />
            </div>
        </div>
    </div>
</template>

<script>
import { renderEle } from "./components/detailForm.js"
import detailForm from "./components/detailForm.vue"
export default {
    components: {
        detailForm
    },
    data() {
        return {
            renderEle
        }
    },
    methods: {
        routerBack(){
            this.$router.push({
                path:'house'
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.communityMage-contain {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    .page-title {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        margin: 23px 0;

        .el-icon{
            cursor: pointer;
        }
    }

    .bg-block{
        background-color: #fff;
        width:100%;
        flex:1;
        padding:24px 17px;
        display: flex;
        justify-content:space-between;
        align-items: flex-start;
        flex-direction: column;
    }
    .content-box {
        width: 100%; flex: 1;
    }



}
</style>
