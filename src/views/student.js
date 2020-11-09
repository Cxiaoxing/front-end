import React from 'react';
import { Accordion, List, Icon, Modal, Toast } from 'antd-mobile';
import '../scss/user.scss'
// 登出接口
import { LogoutRequest } from '../api/account'


class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: "cxx",
            keyList: ["历史记录", "设置", "登录设置"],
            detailList: {
                "历史记录": [
                    {
                        title: "做题记录",
                        event: this.question_history
                    },
                    {
                        title: "比赛记录",
                        event: this.competition_history
                    }
                ],
                "设置": [
                    {
                        title: "个人信息修改",
                        event: this.info_modify
                    }],
                "登录设置": [
                    {
                        title: "密码修改",
                        event: this.password_modify
                    },
                    {
                        title: "退出登录",
                        event: this.logout
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="user_body" style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                    {this.state.keyList.map((item, index) => {
                        return (
                            <Accordion.Panel header={item} key={index}>
                                <List className="my-list">
                                    {this.state.detailList[item].map((detailItem, detailIndex) => {
                                        return (
                                            <List.Item className="detail_item" key={detailIndex} onClick={detailItem.event}>{detailItem.title}</List.Item>
                                        )
                                    })}
                                </List>
                            </Accordion.Panel>
                        )
                    })}
                </Accordion>
            </div>
        )
    }

    onBack = () => {
        window.history.back(-1);
    }


    onChange = (key) => {
        // 选择的第几项
        // console.log(key);
    }


    question_history = () => {
        // 做题记录
    }

    competition_history = () => {
        // 比赛记录
    }

    info_modify = () => {
        // 个人信息修改
    }

    password_modify = () => {
        // 密码修改
    }

    logout = () => {
        // 登出
        Modal.alert('退出登录', '确认退出登录？', [
            { text: '取消' },
            {
                text: '确认', onPress: () => {
                    LogoutRequest().then(response => {
                        Toast.success('退出登录成功，即将跳转到首页！')
                        console.log(response)
                        setTimeout(() => { window.location.replace("/") }, 1000)
                    }).catch(Error => {
                        console.log(Error)
                        Toast.fail('登出失败！');
                    })
                }
            },
        ])
    }
}

export default Student;