<template>
    <el-breadcrumb separator=">">
        <template>
            <el-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{ item }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>

<script>
export default {
    computed: {
        breadcrumbList() {
            return this.$route.meta.names
        }
    }
}
</script>

<style>
</style>
