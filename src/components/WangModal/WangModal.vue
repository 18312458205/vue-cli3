<template>
    <Modal
        :width='width'
        v-model="visible"
        :title="title"
        :ok-text='okText'
        :cancel-text='cancelText'
        @on-cancel="onCancel"
        >
        <p slot="content">内容</p>
        {{visible}}
        <div slot="footer">
            <Button  @click="onCancel">{{cancelText}}</Button>
            <Button type="primary" :loading="buttonLoading"   @click="onOk">{{okText}}</Button>
        </div>
    </Modal>
</template>
<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 520
    },
    title: {
      type: String,
      default: '温馨提示'
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    onOk: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    buttonLoading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {}
}
</script>
