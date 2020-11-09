import React from 'react';
import { Accordion, List, Icon } from 'antd-mobile';
import '../scss/user.scss'


class Teacher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: "cxx",
            keyList: ["用户管理", "题目管理", "比赛管理", "小组管理"],
            detailLIst: {
                "用户管理": ["用户列表", "用户添加", "用户移除"],
                "题目管理": ["题目列表", "题目修改", "题目删除"],
                "比赛管理": ["比赛列表", "比赛创建", "比赛取消"],
                "小组管理": ["小组列表"]
            }
        }
    }

    render() {
        return (
            <div>
                <Icon type="left" size="lg" onClick={this.onBack} />
                <span className="user_header">
                    <img className="user_photo" alt="head_protrait"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601140293533&di=0302b7ada804b78c4d514ff7a0c722b5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20161228%2Feb041943e6b8487d8ad224f79d680537_th.jpeg"
                    />
                    <span className="user_name">{this.state.user_name}</span>
                </span>
                <div className="user_body" style={{ marginTop: 10, marginBottom: 10 }}>
                    <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                        {this.state.keyList.map((item, index) => {
                            return (
                                <Accordion.Panel header={item} key={index}>
                                    <List className="my-list">
                                        {this.state.detailLIst[item].map((detailItem, detailIndex)=>{
                                            return(
                                            <List.Item className="detail_item" key={detailIndex}>{detailItem}</List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        )
    }

    onBack = () => {
        window.history.back(-1);
    }


    onChange = (key) => {
        console.log(key);
    }
}

export default Teacher;