<template>
  <wang-layout>
    <div>
      <Button @click="tell">爷爷</Button>
      <father></father>
    </div>
  </wang-layout>
</template>
<script>
import WangLayout from '@components/LayoutContainer/WangLayout'
import Emitter from 'iview/src/mixins/emitter'
import father from './father'
// import { getOffset } from '@/assets/until'
export default {
  name: 'dispatch',
  components: {
    WangLayout,
    father
  },
  mixins: [ Emitter ],
  data () {
    return {
      msg: 'eeeee'
    }
  },
  created () {
  },
  mounted () {
    this.$on('sent', (data) => {
      console.log('收到', data)
    })
  },
  methods: {
    tell () {
      this.broadcast('son', 'tell', this.msg)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
