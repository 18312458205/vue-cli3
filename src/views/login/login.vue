<template>
    <i-form ref="formInline" :model="formInline" :rules="ruleInline" inline>
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
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </i-form>
</template>
<script>
export default {
  data () {
    return {
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
          if (this.formInline.user === 'wangyajing' && this.formInline.password === '123456') {
            this.$Message.success('登录成功!')
            await this.loginIn()
            this.$router.push('/home')
          } else {
            this.$Message.error('登录失败!')
          }
        } else {
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
