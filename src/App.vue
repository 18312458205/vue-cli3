<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  created () {
    console.log('原根路径')
  }
}
</script>
<style lang="less">
#app {
  position: relative;
}
</style>
