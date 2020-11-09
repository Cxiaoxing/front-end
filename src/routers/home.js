import React from 'react';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import '../scss/home.scss'
import Questions from '../views/questions'
import Competitions from '../views/competitions'
import Group from '../views/group'


class Home extends React.Component {
  state = {
    user_name: "cxx",
    open: false,
    list: ["题库", "比赛", "小组"],
    isActive: 0
  }

  render() {
    const sidebar = (
      <div>
        <img className="user_photo" alt="head_protrait" 
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601140293533&di=0302b7ada804b78c4d514ff7a0c722b5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20161228%2Feb041943e6b8487d8ad224f79d680537_th.jpeg" 
        onClick={this.toMyhome}
        />
        <h2 onClick={this.toMyhome}>{this.state.user_name}</h2>
        <List>
          {this.state.list.map((item, index) => {
            return (
              <List.Item key={index}
                thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=911499180,1056094045&fm=15&gp=0.jpg"
                multipleLine
                onClick={()=>{this.choose_page({ index })}}
              >
                {item}
              </List.Item>
            )
          })}
        </List>
      </div>);

    return (
    <div>
      <NavBar className="title" icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>OJ系统</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#111111', textAlign: 'center', paddingTop: 5 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
          {
          this.state.isActive===0?
          <Questions />:this.state.isActive===1?
          <Competitions />:
          <Group />
          }
      </Drawer>
    </div>);
  }

  toMyhome = ()=>{
    if(document.cookie){
      // 已经登陆跳转到用户页面
      window.location.href='/#/user'
    }else{
      // 未登陆跳转到登陆页面
      window.location.href='/#/login'
    }
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  choose_page = (e) => {
    this.setState({
        isActive: e.index,
        open: !this.state.open
      })
  }
}

export default Home;
