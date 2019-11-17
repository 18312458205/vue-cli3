<template>
  <Layout class="layout-container">
    <Header :style="{textAlign: 'right', position: 'fixed', zIndex: '1000', width: '100%'}">
      <Poptip :title="null" placement="bottom-end">
        <div class="api" slot="content">
          <Button type="text" @click="loginOut" >退出</Button>
        </div>
        <Avatar icon="ios-person" size="large" />
    </Poptip>
    </Header>
    <Layout :style="{marginTop: '64px'}">
      <Sider :style="{background: '#FFF'}" hide-trigger>
        <Menu
        width="auto"
        theme="light"
        :active-name="activeKey">
          <MenuItem
          :key="item.path"
          v-for="item in config1"
          :name="item.path"
          :to="item.path"
          >
          {{item.title}}
          </MenuItem>
        </Menu>
      </Sider>
      <Content>
        <slot></slot>
      </Content>
      </Layout>
  </Layout>
</template>
<script>
import config from './config'
export default {
  components: {
    // WangHeader
  },
  props: {},
  data () {
    return {
      config1: config,
      activeKey: '',
      timer: null
    }
  },
  mounted () {
    this.activeKey = this.$route.path
  },
  beforeDestory () {
    if (this.timer) clearTimeout()
  },
  methods: {
    loginOut () {
      localStorage.removeItem('data')
      this.timer = setTimeout(() => {
        this.$router.push('/login')
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
.layout-container {
  /deep/.ivu-poptip-popper {
    min-width: 60px;
  }
  /deep/.ivu-layout-content {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }
  /deep/.ivu-layout-has-sider{
    min-height: calc(100vh - 64px);
  }
}
</style>
