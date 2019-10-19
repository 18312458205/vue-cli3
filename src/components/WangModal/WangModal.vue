<template>
    <Modal
        :width='width'
        v-model="visible"
        :title="title"
        :ok-text='okText'
        :cancel-text='cancelText'
        @on-cancel="cancel"
        >
        <p slot="content">内容</p>
        <div slot="footer">
            <Button  @click="cancel">{{cancelText}}</Button>
            <Button type="primary" :loading="buttonLoading"   @click="ok">{{okText}}</Button>
        </div>
    </Modal>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
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
      visible: this.value,
      okLoading: false
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    cancel () {
      this.onCancel()
    },
    ok () {
      this.onOk()
    }
  }
}
</script>
