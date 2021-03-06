import Schema from '../../../../modules/schema'

export default class SubTableSchema extends Schema {
  constructor (props) {
    super()
    this.title = ''
    this.placeholder = '暂无内容'
    this.option = {
      type: 'static',
      columns: [{
        type: 'index',
        title: 'No',
        key: '',
        align: 'left'
      }],
      page: {
        total: 0,
        current: 1,
        size: 10,
        showTotal: true,
        position: 'left'
      },
      data: [],
      dynamicData: [],
      noDataText: '暂无内容'
    }
    this.$init(props)
  }
}

// 静态配置，同类widget公有
Object.assign(SubTableSchema, {
  title: '子表',
  widget: 'subTable',
  icon: 'ios-grid-view',
  type: 'array',
  validators: [],
  logic: {
    value: [],
    event: []
  }
})
