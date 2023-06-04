<template>
    <div class="home_box">
        <div class="aside">
            <div class="logo-title">智慧社区管理平台</div>
            <home-aside></home-aside>
        </div>
        <el-container>
            <home-header></home-header>
            <el-main>
                <breadcrumb></breadcrumb>
                <div class="outer-content-container">
                    <transition name="fade-transform" mode="out-in">
                        <el-scrollbar>
                            <router-view />
                        </el-scrollbar>
                    </transition>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>

import homeHeader from './component/homeHeader'
import homeAside from './component/homeAside'
import breadcrumb from './component/breadcrumb'
export default {
    components: {
        homeHeader,
        homeAside,
        breadcrumb
    }
}
</script>

<style lang="scss">
@import './home.scss';
</style>
