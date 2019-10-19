<template>
  <div>
    <div>home</div>
     <router-view></router-view>
    <i-button @click="openModal">打开静态弹框</i-button>
    <i-button @click="openModal1">打开动态弹框</i-button>
    <wang-modal
      v-model="visible"
      width=550
      ></wang-modal>
    </div>
</template>
<script>
import WangModal from '@components/WangModal/index'
export default {
  components: {
    WangModal
  },
  data () {
    return {
      visible: false
    }
  },
  created () {},
  methods: {
    // 打开静态组件
    openModal () {
      this.visible = true
    },
    // 打开动态组件
    openModal1 () {
      WangModal.confirm({
        width: 560,
        title: '温馨提示',
        okText: '保存',
        cancelText: '取消',
        loading: true,
        onOk: () => {
          console.log('ok')
          setTimeout(() => {
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
