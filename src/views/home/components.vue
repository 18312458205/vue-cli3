<template>
  <table border="1px solid #ccc" cellspacing="0" cellpadding="0">
    <colgroup>
      <col span="2">
      <col>
    </colgroup>
    <thead>
      <tr>
        <th>语文</th>
        <th>数学</th>
        <th>英语</th>
        <th>生物</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>22</td>
        <td>33</td>
        <td>44</td>
        <td>55</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Emitter from 'iview/src/mixins/emitter'
export default {
  name: 'components',
  components: {},
  mixins: [ Emitter ],
  props: {
    columns: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  },
  data () {
    return {
      newColumns: []
    }
  },
  watch: {
    columns: {
      deep: true,
      handle (val) {
        console.log(val)
        this.newColumns = val
      }
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  tr {
    td th {
      border: 1px solid #ccc;
    }
  }
}
</style>
