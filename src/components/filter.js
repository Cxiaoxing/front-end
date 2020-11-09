import React from 'react'
import '../scss/questions.scss'
import { Popover } from 'antd-mobile';
const Item = Popover.Item;

class IsPassCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      selected: 'all',
      all_list: [],  // 用于判断传入列表是否更新，避免重复渲染
      pass_questions: [2, 3, 5]
    }
  }

  componentDidMount() {
    this.setState({
      all_list: this.props.detail
    })
  }

  componentDidUpdate() {
    if (this.state.all_list !== this.props.detail) {
      // 更新上级传入列表时，初始化all_list列表
      this.setState({
        all_list: this.props.detail,
      })
      // 上级传入列表更新时，重新调用一次选择函数
      this.onSelect({ props: { value: this.state.selected } })
    }
  }

  onSelect = (opt) => {
    // 关闭气泡，且同步选择的信息
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
    if (opt.props.value === 'pass') {
      // 如果题目编号在pass_questions中，则加入pass_list中
      let pass_list = []
      let that = this
      let pass = function(){
        that.props.detail.forEach(item => {
          if (that.state.pass_questions.indexOf(item.id) > -1) {
            pass_list.push(item)
          }
        })
        return new Promise ((resolve, reject)=>{
          resolve(pass_list)
        })
      }
      pass().then((list)=>{
        that.props.synchronous(list, true)
      }) 
    } else if (opt.props.value === 'not_pass') {
      let not_pass_list = []
      let that = this;
      let notpass = function(){
        that.props.detail.forEach(item => {
          if (that.state.pass_questions.indexOf(item.serial_number) <= -1) {
            not_pass_list.push(item)
          }
        })
        return new Promise ((resolve, reject)=>{
          resolve(not_pass_list)
        })
      }
      notpass().then((list)=>{
        that.props.synchronous(list, true)
      }) 
    } else {
      this.props.synchronous(this.props.detail, false)
    }
  };

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  render() {
    return (
      <Popover mask
        overlayClassName="fortest"
        overlayStyle={{ color: 'currentColor' }}
        visible={this.state.visible}
        overlay={[
          // Item参数 icon={myImg('')}
          (<Item key="0" value="all">全部题目</Item>),
          (<Item key="1" value="pass">已通过题目</Item>),
          (<Item key="2" value="not_pass">未通过题目</Item>),
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onVisibleChange={this.handleVisibleChange}
        onSelect={this.onSelect}
        className="isPass_filter"
      >
        <div style={{
          height: '100%',
          padding: '0 15px',
          marginRight: '-15px',
          display: 'flex',
          alignItems: 'center',
        }}
        >
          <img className="filter_icon" alt="isPass" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601382069704&di=286f8fc48f4902ed2b798f6909da88a9&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F38%2F63%2F48573c8f70a3460.jpg" />
        </div>
      </Popover>
    )
  }
}

class IsKeyCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      selected: 'all',
      all_list: [],
      tags: ["111", "222", "333", "444", '555', "666", "777"]
    }
  }

  componentDidMount() {
    this.setState({
      all_list: this.props.detail
    })
  }

  componentDidUpdate() {
    if (this.state.all_list !== this.props.detail) {
      // 更新上级传入列表时，初始化all_list列表
      this.setState({
        all_list: this.props.detail,
      })
      this.onSelect({ props: { value: this.state.selected } })
    }
  }

  onSelect = (opt) => {
    // 关闭气泡，且同步选择的信息
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
    if (opt.props.value === 'all') {
      this.props.synchronous(this.props.detail)
    } else {
      let select_list = []
      let that = this;
      let filter = function(){
        that.props.detail.forEach(item => {
          if (item.tags.indexOf(opt.props.value) > -1) {
            select_list.push(item)
          }
        })
        return new Promise((resolve, reject)=>{
          resolve(select_list)
        })
      };
      filter().then(function(list){
          that.props.synchronous(list)
      })
    }
  };

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  render() {
    return (
      <Popover mask
        overlayClassName="fortest"
        overlayStyle={{ color: 'currentColor' }}
        visible={this.state.visible}
        overlay={[
          <Item key='0' value='all'>all</Item>,
          this.state.tags.map((item, index) => {
            return (
              <Item key={index + 1} value={item}>{item}</Item>
            )
          })
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onVisibleChange={this.handleVisibleChange}
        onSelect={this.onSelect}
        className="isKey_filter"
      >
        <div style={{
          height: '100%',
          padding: '0 15px',
          marginRight: '-15px',
          display: 'flex',
          alignItems: 'center',
        }}
        >
          <img className="filter_icon" alt="isKey" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601382036900&di=5978057643f9e9964a0a644b27de5a65&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F53%2F48%2F315746d7c47562a.jpg" />
        </div>
      </Popover>
    )
  }
}

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      all_list: [],
      isPass_list: [],
      default_list: [],  // 经过两轮筛选后的默认排序
      isPass: false,
      isAscending: true  // 是否升序，第一次点击难度排序时为升序
    }
  }

  componentWillMount() {
    this.setState({
      all_list: this.props.detail,
      default_list: this.props.detail
    })
  }

  componentDidUpdate() {
    if (this.state.all_list !== this.props.detail) {
      this.setState({
        all_list: this.props.detail,
        default_list: this.props.detail
      })
    }
  }

  render() {
    return (
      <div className="filter">
        <span className="default_sort" onClick={this.default_list}>默认排序</span>
        <span className="difficulty_sort" onClick={this.sort_list}>难度排序</span>
        <IsPassCom detail={this.props.detail}
          synchronous={this.isPass_synchronous}
        />
        <IsKeyCom detail={this.state.isPass ? this.state.isPass_list : this.props.detail}
          synchronous={this.isKey_synchronous}
        />
      </div>
    )
  }

  isPass_synchronous = (list, isPass) => {
    // 改变之后，IsKeyCom会检测到，筛选后再同步，所以这里不用同步
    this.setState({
      isPass_list: list,
      isPass: isPass,
    })
  }

  isKey_synchronous = (list) => {
    this.setState({
      default_list: list
    })
    this.props.synchronous(list)
  }

  default_list = () => {
    this.setState({
      isAscending: true
    })
    this.props.synchronous(this.state.default_list||this.props.detail)
  }

  sort_list = () => {
    let sort_list = []
    let that = this
    let sort = function() {
      if(that.state.isAscending){
        // 升序排序  对象Promise函数then
        // 深拷贝，避免排序影响原数组
        sort_list = JSON.parse(JSON.stringify(that.state.default_list||that.props.detail))
        sort_list.sort((a, b) => {
          return (a.difficulty - b.difficulty)
        })
      }else{
        sort_list = JSON.parse(JSON.stringify(that.state.default_list))
        sort_list.sort((a, b) => {
          return (b.difficulty - a.difficulty)
        })
      }
      return new Promise(function(resolve, reject){
        resolve(sort_list)
      })
    }
    sort().then((list)=>{
      that.props.synchronous(list)
    })
    // 改变升序标志
    this.setState({
      isAscending: !this.state.isAscending
    })
  }
}

export default Filter;