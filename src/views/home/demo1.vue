<template>
  <wang-layout>
    <div>
      <div v-for="(item, index)  of  form.list" :key="item">
          {{ item }} -----  {{ index }}
      </div>
      <Button @click="handleChange">set添加一个元素</Button>
      <div v-for="(item1, index1)  of  form1.list" :key="item1">
          {{ item1 }} -----  {{ index1 }}
      </div>
      <Button @click="handleChange1">splice添加一个元素</Button>
      <div v-for="(item2, index2)  of  form2.list" :key="item2">
          {{ item2 }} -----  {{ index2 }}
      </div>
      <Button id="ref3" @click="handleChange2">直接改变数组</Button>
    </div>
    <components
      :columns="columns"
    >
    </components>
  </wang-layout>
</template>
<script>
import WangLayout from '@components/LayoutContainer/WangLayout'
import Emitter from 'iview/src/mixins/emitter'
import components from './components'
export default {
  components: {
    WangLayout,
    components
  },
  mixins: [ Emitter ],
  data () {
    return {
      form: {
        name: '王',
        list: [1, 2, 3]
      },
      form1: {
        name: '王',
        list: [4, 5, 6]
      },
      form2: {
        name: '王',
        list: [7, 8, 9]
      }
    }
  },
  computed: {
    columns () {
      return [
        {
          key: 'yuwen',
          title: '语文',
          width: 70
        },
        {
          key: 'shuxue',
          title: '数学',
          minWidth: 70
        },
        {
          key: 'yingyu',
          title: '英语'
        },
        {
          key: 'shengwu',
          title: '生物'
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleChange () {
      // this.$set(this.form.list, 3, 4)
      this.form.list[3] = 4
    },
    handleChange1 () {
      this.form1.list.splice(2, 0, 7)
    },
    handleChange2 () {
      this.form2.list = [7, 8, 9, 10]
    }
  }
}
</script>
<style lang="less" scoped>
</style>
