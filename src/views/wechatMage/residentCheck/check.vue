<template>
    <div class="residentCheck-check-ctain">
        <detailForm type="check" />

    </div>
</template>

<script>
import detailForm from './component/detailForm.vue'
export default {
    components: {
        detailForm
    },
    data() {
        return {
        }
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
    methods: {
        handleEvent() {

        }
    }

}
</script>

<style lang="scss" scoped>
.residentCheck-check-ctain{
    width: 100%; height: 100%;
}
</style>
