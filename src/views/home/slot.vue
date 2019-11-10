<template>
  <div>
   <slot></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ddd: {},
      rrr: undefined || '',
      arr: [
        { a: 1 },
        { a: 2 },
        { a: 3 }
      ]
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
    dele () {
      this.arr.forEach((e, k) => {
        this.arr.splice(0, 1)
      })
    }
  }
}
</script>
