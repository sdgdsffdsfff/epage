import Schema from '../../../../modules/schema'
import { getRuleValidator } from '../../../helper'

export default class RadioSchema extends Schema {
  constructor (props) {
    super()
    this.title = '单选框'
    this.placeholder = '请选择'
    this.option = {
      type: 'static',
      direction: 'horizontal',
      url: '',
      adapter: '',
      data: [
        { key: 'A', value: 'A' }
      ],
      dynamicData: []
    }
    this.$init(props)
    const rule = {
      trigger: 'change',
      validator: getRuleValidator(this.rules[0], this.type)
    }
    this.updateRequiredRule(rule)
  }
}

// 静态配置，同类widget公有
Object.assign(RadioSchema, {
  title: '单选框',
  widget: 'radio',
  icon: 'android-radio-button-on',
  type: ['string', 'number'],
  validators: [],
  logic: {
    value: ['=', '!='],
    // event: ['change']
    event: []
  }
})
