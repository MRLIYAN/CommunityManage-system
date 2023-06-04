<template>
    <div class="resetPwd-container">
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
.resetPwd-container{
    width: 100%; height:100%;
}
</style>