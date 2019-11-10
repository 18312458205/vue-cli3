<template>
  <wang-layout>
    <div>
      <Button type="primary" @click="openModal">js动态弹框</Button>
    </div>
  </wang-layout>
</template>
<script>
import WangLayout from '@components/LayoutContainer/WangLayout'
import WangModal from '@components/WangModal/index.js'
export default {
  components: {
    WangLayout
  },
  data () {
    return {
    }
  },
  created () {},
  mounted () {
  },
  methods: {
    // 打开动态组件
    openModal () {
      WangModal.confirm({
        width: 560,
        title: '温馨提示',
        okText: '保存',
        cancelText: '取消',
        loading: true,
        body: '内容',
        onOk: () => {
          setTimeout(() => {
            console.log('ok')
            WangModal.remove()
          }, 3000)
        },
        onCancel: () => {
          console.log('cancel')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
