<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.reStore()
    this.$store.commit('GET_MENU_LIST', this.$store.state.menuList)
  },
  methods: {
    reStore () {
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('store', JSON.stringify(this.$store.state))
      })
      if (sessionStorage.getItem('store')) {
        this.$store.replaceState(
          Object.assign(
            {},
            this.$store.state,
            JSON.parse(sessionStorage.getItem('store'))
          )
        )
        sessionStorage.removeItem('store')
      }
    }

  }

}
</script>
<style lang="scss" scoped>
html,
body,
#app {
  width: 100%;
  height: 100%;
  color: #606266;
}
</style>
