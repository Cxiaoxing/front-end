import React from 'react'
import '../scss/login.scss'
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { LoginRequest } from '../api/account'


class LoginCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // 解构
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="form-wrap">
                <div className="form-header">
                    <span className="form-title">登陆</span>
                    <span className="to_register" onClick={() => { this.props.onChange() }}>快速登陆</span>
                </div>
                <div className="form-content">
                    <List className="login-form">
                        <List.Item
                            className="form-item"
                            thumb="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2395615566,55385469&fm=26&gp=0.jpg"
                        >
                            <InputItem
                                placeholder="Username/Email/Mobile"
                                {...getFieldProps('identity_info', {
                                    rules: [
                                        { required: true, message: '请输入用户名/邮箱/手机号码！' },
                                    ],
                                })}
                                error={!!getFieldError('identity_info')}
                                onErrorClick={() => {
                                    Toast.fail(getFieldError('identity_info').join(' '));
                                }}
                            />
                        </List.Item>
                        <List.Item
                            className="form-item"
                            thumb="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1495891182,3136101676&fm=26&gp=0.jpg"
                        >
                            <InputItem
                                type="password" placeholder="Password"
                                {...getFieldProps('password', {
                                    rules: [
                                        { required: true, message: '请输入密码！' },
                                    ],
                                })}
                                error={!!getFieldError('password')}
                                onErrorClick={() => {
                                    Toast.fail(getFieldError('password').join(' '));
                                }}
                            />
                        </List.Item>
                        <List.Item className="form-item">
                            <Button type="primary" size="large" onClick={this.onFinish} className="login-form-button">登陆</Button>
                        </List.Item>
                    </List>
                </div>
            </div>
        )
    }


    // 将data编码为x-www-form-urlencoded
    encodeUri = (data)=>{
        return encodeURIComponent(JSON.stringify(data)).replace(/%7B%22/g,"").replace(/%22%3A%22/g,"=").replace(/%22%2C%22/g,"&").replace(/%22%7D/g,"")
    }

    onFinish = () => {
        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props.form.getFieldsValue());
                LoginRequest(this.encodeUri(this.props.form.getFieldsValue())).then(response => {
                    Toast.success('登陆成功，即将跳转到首页！')
                    console.log(response)
                    setTimeout(()=>{window.location.replace("/")},1000)
                }).catch(Error => {
                    console.log(Error)
                    Toast.fail('登陆失败，请检查用户名或密码是否正确！');
                })
            } else {
                Toast.fail('登陆失败，请注意提示信息！');
            }
        });
    }

}

LoginCom = createForm()(LoginCom);
export default LoginCom;