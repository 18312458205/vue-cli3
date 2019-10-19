import WangModal from './WangModal.js'

let modalInstance

function getModalInstance (render = undefined) {
  modalInstance = modalInstance || WangModal.newInstance({
    closable: false,
    maskClosable: false,
    footerHide: true,
    render: render
  })

  return modalInstance
}

function confirm (options) {
  const render = ('render' in options) ? options.render : undefined
  let instance = getModalInstance(render)

  options.onRemove = function () {
    modalInstance = null
  }

  instance.show(options)
}

WangModal.confirm = function (props = {}) {
  props.showCancel = true
  return confirm(props)
}

WangModal.remove = function () {
  if (!modalInstance) { // at loading status, remove after Cancel
    return false
  }

  const instance = getModalInstance()

  instance.remove()
}

export default WangModal
