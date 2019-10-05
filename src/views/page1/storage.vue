<template>
  <div>
     <Button @click="loginIn">登录</Button>
     <Button @click="loginOut">退出</Button>
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
    }
  }
}
</script>
