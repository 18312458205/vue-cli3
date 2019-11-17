<template>
  <wang-layout class="wang-input">
    <div class="input-box">
      <Dropdown trigger="custom" :visible="visible">
        <Input v-model="value"
        @on-change="changList"
        @on-focus="focusList"
        @on-keydown="keyList"
        placeholder="Enter something..."
        style="width: 300px" />
        <DropdownMenu ref="menu" slot="list">
            <DropdownItem :class="{'active': choiceIndex === key}" v-for="(item, key) in list1" :key="item.key">{{item.value}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <img src="@assets/img3.png">
    </div>
  </wang-layout>
</template>
<script>
import WangLayout from '@components/LayoutContainer/WangLayout'
import { scrollTop } from 'iview/src/utils/assist'
import Emitter from 'iview/src/mixins/emitter'
// import { getOffset } from '@/assets/until'
export default {
  components: {
    WangLayout
  },
  mixins: [ Emitter ],
  data () {
    return {
      visible: false,
      value: '',
      list1: [
        { key: 0, value: '驴打滚-0' },
        { key: 1, value: '驴打滚-1' },
        { key: 2, value: '驴打滚-2' },
        { key: 3, value: '驴打滚-3' },
        { key: 4, value: '驴打滚-4' },
        { key: 5, value: '驴打滚-5' },
        { key: 6, value: '驴打滚-6' }
      ],
      list2: [
        { key: 0, value: '驴打滚' },
        { key: 1, value: '驴打滚' },
        { key: 2, value: '驴打滚' },
        { key: 3, value: '驴打滚' },
        { key: 4, value: '驴打滚' },
        { key: 5, value: '驴打滚' },
        { key: 6, value: '驴打滚' },
        { key: 7, value: '驴打滚' },
        { key: 8, value: '驴打滚' }
      ],
      choiceIndex: -1
    }
  },
  created () {
  },
  methods: {
    changList () {
      this.visible = false
      this.list1 = this.list2
      this.visible = true
      this.$nextTick(() => {
        if (document.createEvent) {
          const event = document.createEvent('HTMLEvents')
          event.initEvent('resize', true, true)
          window.dispatchEvent(event)
        } else if (document.createEventObject) {
          window.fireEvent('onresize')
        }
      })
    },
    focusList () {
      this.visible = true
    },
    keyList (event) {
      console.log(event)
      if (event.keyCode === 38) {
        this.uphandle()
        event.preventDefault()
      } else if (event.keyCode === 40) {
        this.downhandle()
        event.preventDefault()
      }
    },
    uphandle () {
      if (this.choiceIndex === -1 || this.choiceIndex === 0) {
        this.choiceIndex = this.list1.length - 1
      } else {
        this.choiceIndex -= 1
      }
      this.scrollhandle(this.choiceIndex)
    },
    downhandle () {
      if (this.choiceIndex === -1 || this.choiceIndex === this.list1.length - 1) {
        this.choiceIndex = 0
      } else {
        this.choiceIndex += 1
      }
      this.scrollhandle(this.choiceIndex)
    },
    scrollhandle (cur, dir) {
      const wrapper = this.$refs.menu.$el
      const active = this.$refs.menu.$children[cur].$el
      const wrapperHeight = wrapper.clientHeight
      const wrapperScrollTop = wrapper.scrollTop
      const activeHeight = active.clientHeight
      const activeTop = active.offsetTop
      if (activeTop < wrapperScrollTop || activeTop >= wrapperHeight + wrapperScrollTop) {
        console.log(activeTop)
        console.log(wrapperScrollTop)
        scrollTop(wrapper, wrapperScrollTop, activeTop - wrapperHeight + activeHeight, 100)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.wang-input{
  .input-box {
    /deep/.ivu-dropdown {
      margin-top: 150px;
    }
    /deep/.ivu-select-dropdown {
      width: 300px;
    }
     /deep/.ivu-dropdown-menu {
      height: 120px;
      overflow-y: auto;
      /deep/.active {
        background-color: #DDD;
      }
     }
  }
}
</style>
