<template>
    <div>
      页面不存在
           <Button @click="jump">跳转</Button>
      </div>
</template>
<script>

export default {
  created () {},
  methods: {
    jump () {
      this.$router.push('/page1/storage')
    }
  }
}
</script>
<style lang="less">
</style>
