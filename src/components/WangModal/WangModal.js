import Vue from 'vue'
import WangModal from './WangModal.vue'

WangModal.newInstance = properties => {
  const _props = properties || {}
  const Instance = new Vue({
    data: Object.assign({}, _props, {
      visible: false,
      width: 416,
      title: '',
      body: '',
      iconType: '',
      iconName: '',
      okText: undefined,
      cancelText: undefined,
      showCancel: false,
      loading: false,
      buttonLoading: false,
      scrollable: false,
      closable: false,
      closing: false // 关闭有动画，期间使用此属性避免重复点击
    }),
    render (h) {
      return h(WangModal, {
        props: Object.assign({}, _props, {
          width: this.width,
          title: this.title,
          okText: this.okText,
          cancelText: this.cancelText,
          buttonLoading: this.buttonLoading,
          onOk: this.ok,
          onCancel: this.cancel
        }),
        domProps: {
          value: this.visible
        },
        on: {
          input: (status) => {
            this.visible = status
          }
        }
      }, [])
    },
    methods: {
      cancel () {
        if (this.closing) return
        this.$children[0].visible = false
        this.buttonLoading = false
        this.onCancel()
        this.remove()
      },
      ok () {
        if (this.closing) return
        if (this.loading) {
          this.buttonLoading = true
        } else {
          this.$children[0].visible = false
          this.remove()
        }
        this.onOk()
      },
      remove () {
        this.closing = true
        setTimeout(() => {
          this.closing = false
          this.destroy()
        }, 300)
      },
      destroy () {
        this.$destroy()
        document.body.removeChild(this.$el)
        this.onRemove()
      }
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const modal = Instance.$children[0]
  console.log(Instance)

  return {
    show (props) {
      modal.$parent.showCancel = props.showCancel

      // notice when component destroy
      modal.$parent.onRemove = props.onRemove

      if ('width' in props) {
        modal.$parent.width = props.width
      }

      if ('title' in props) {
        modal.$parent.title = props.title
      }

      if ('okText' in props) {
        modal.$parent.okText = props.okText
      }

      if ('cancelText' in props) {
        modal.$parent.cancelText = props.cancelText
      }

      if ('onCancel' in props) {
        modal.$parent.onCancel = props.onCancel
      }

      if ('onOk' in props) {
        modal.$parent.onOk = props.onOk
      }
      // async for ok
      if ('loading' in props) {
        modal.$parent.loading = props.loading
      }
      modal.visible = true
    },
    remove () {
      modal.visible = false
      modal.$parent.remove()
    },
    component: modal
  }
}

export default WangModal
