export default {
  name: 'Anchoredheading',
  functional: true,
  props: ['message'],
  render: (h, ctx) => h('div', {},
    [
      ctx.data.scopedSlots.a({
        item: ctx.props.message
      })
    ]
  )
}
