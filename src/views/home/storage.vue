<template>
  <div>
     <Button @click="loginIn">登录</Button>
     <Button @click="loginOut">退出</Button>
     <img src="@assets/logo.png" alt="">
    <img :src="require('@assets/logo.png')" alt="">
     <img src="/img/icons/favicon-16x16.png" alt="">
     <Button @click="jump">跳转</Button>
  </div>
</template>

<script>

export default {
  components: {},
  created () {},
  mounted () {
    window.removeEventListener('storage', this.showStorage)
    window.addEventListener('storage', this.showStorage)
  },
  methods: {
    loginIn () {
      const data = JSON.stringify({ isLogin: true })
      localStorage.setItem('data', data)
    },
    loginOut () {
      localStorage.removeItem('data')
    },
    showStorage (e) {
      if (!e) {
        e = window.event
      }
      const data = JSON.parse(localStorage.getItem('data'))
      if (data && data.isLogin) {
        this.$Message.info({
          content: '登录成功',
          duration: 3
        })
      } else {
        this.$Message.info({
          content: '退出成功',
          duration: 3
        })
      }
    },
    jump () {
      this.$router.push('/')
    }
  }
}
</script>
