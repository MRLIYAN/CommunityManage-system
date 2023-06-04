<template>
    <el-header>
        <!-- <div class="title">
            <span>智慧社区综合管理平台</span>
        </div> -->
        <div class="user">
            <span class="module head-module">
                <img class="icon head-icon" src="@/assets/images/index/head-img.png" alt="">
                <span class="font">Admin</span>
            </span>
            <span class="module notificate-module">
                <img class="icon notificate-icon" src="@/assets/images/index/notificate-icon.png" alt="">
                <span class="font">消息通知</span>
            </span>
            <span class="module logout-module" @click="logout">
                <img  class="icon logout-icon" src="@/assets/images/index/logout.png" alt="">
                <span class="font">退出登录</span>
            </span>
            <!-- <span class="module">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>基本信息</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出账号</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </span> -->

        </div>
    </el-header>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$router.push('login')
        }
    }
}
</script>

<style lang="scss"></style>
