<template>
 <div class="login-box">
<Card style="width:320px">
  <h2 :style="{textAlign: 'center'}">组件库</h2>
    <i-form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <i-input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
        <FormItem prop="password">
            <i-input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
        <FormItem>
            <Button :loading="loading" type="primary" @click="handleSubmit('formInline')" long>登录</Button>
        </FormItem>
    </i-form>
</Card>
</div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          this.loading = true
          setTimeout(async () => {
            this.$Message.success('登录成功!')
            await this.loginIn()
            this.$router.push('/home')
          }, 1000)
        }
      })
    },
    loginIn () {
      const data = JSON.stringify({ isLogin: true })
      localStorage.setItem('data', data)
    }
  }
}
</script>
<style lang="less" scoped>
.login-box {
  width: 100%;
  height: calc(100vh);
  display: flex;
   justify-content: center;
   align-items: center;
}
</style>
