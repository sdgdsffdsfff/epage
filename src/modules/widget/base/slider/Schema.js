import Schema from '../../../../modules/schema'

export default class SliderSchema extends Schema {
  constructor (props) {
    super()
    this.type = 'number'
    this.title = '滑块'
    this.placeholder = '请输入'
    this.$init(props)
  }
}

// 静态配置，同类widget公有
Object.assign(SliderSchema, {
  title: '滑块',
  widget: 'slider',
  icon: 'minus-round',
  type: 'number',
  validators: ['number'],
  logic: {
    value: ['=', '!='],
    // event: ['change']
    event: []
  }
})
