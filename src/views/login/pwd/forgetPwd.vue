<template>
    <div class="forgetPwd-container">
        <passwordVue />
    </div>
</template>

<script>
import passwordVue from './password.vue';
export default {
    components: {
        passwordVue
    }
}
</script>

<style lang="scss" scoped>
.forgetPwd-container{
    width: 100%; height:100%;
}
</style>