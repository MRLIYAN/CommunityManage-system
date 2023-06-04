<template>
    <el-aside width="265px">
        <el-scrollbar>
            <el-menu :default-active="activeRouter" router @open="handleOpen" @close="handleClose"
                background-color="transparent" text-color="#C1D5FD" active-text-color="#fff">
                <menu-tree :menuData="menuList" :activeRouter="activeRouter"></menu-tree>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script>
import menuTree from './menuTree'
export default {
    components: {
        menuTree
    },
    data() {
        return {
            activeRouter: this.$store.state.router_path || ''
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    },
    computed: {
        menuList() {
            return this.$store.state.menuList
        }
    },
    watch: {
        $route: {
            handler: function (val) {
                let routePath = val.meta.activePath || val.path.split('/')[1];
               
                this.activeRouter = routePath
                this.$store.commit('HANDEL_ROUTER', this.activeRouter)
            },
            immediate: true,
            deep: true
        }
    }
}
</script>

<style></style>
