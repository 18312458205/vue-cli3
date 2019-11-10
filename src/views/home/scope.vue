<template>
  <div>
    <slot name="a" :item="message"></slot>
    </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {}
    }
  }
}
</script>
