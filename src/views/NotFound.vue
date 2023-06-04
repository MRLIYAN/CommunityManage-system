<template>
  <div class="app-notFound">
    <img :src="pic" />
    <el-button @click="goHome">回到首页</el-button>
  </div>
</template>

<script>
import pic from '@/assets/images/404.png'
export default {
  name: 'notFound',
  data () {
    return {
      pic
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-notFound {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  img {
  }
  .el-button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
