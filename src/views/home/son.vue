<template>
    <div>
      <Button @click="sent">son</Button>
    </div>
</template>
<script>
import Emitter from 'iview/src/mixins/emitter'
export default {
  name: 'son',
  components: {
  },
  mixins: [ Emitter ],
  data () {
    return {
      msg: 'tttttt'
    }
  },
  created () {
  },
  methods: {
    sent () {
      this.dispatch('dispatch', 'sent', this.msg)
    }
  },
  mounted () {
    this.$on('tell', (data) => {
      console.log('回信', data)
    })
  }
}
</script>
<style lang="less" scoped>
</style>
