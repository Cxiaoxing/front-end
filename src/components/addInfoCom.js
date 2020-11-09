import React from 'react'
import '../scss/login.scss'
import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';


class RegisterCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="form-wrap">
                <div className="form-header">
                    <span className="form-title">注册</span>
                    <span className="to_register" onClick={() => { this.props.onChange() }}>已有账号，直接登陆</span>
                </div>
                <form className="form-content">
                    <List className="login-form">
                        <List.Item
                            className="form-item"
                            thumb="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2395615566,55385469&fm=26&gp=0.jpg"
                        >
                            <InputItem
                                placeholder="Username"
                                {...getFieldProps('username', {
                                    rules: [
                                        { required: true, message: '请输入想要注册的用户名！' },
                                        { validator: this.validateUsername },
                                    ],
                                })}
                                error={!!getFieldError('username')}
                                onErrorClick={() => {
                                    alert(getFieldError('username').join(' '));
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
                                        { required: true, message: '请输入想要注册的密码！' },
                                    ],
                                })}
                                error={!!getFieldError('password')}
                                onErrorClick={() => {
                                    alert(getFieldError('password').join(' '));
                                }}
                            />
                        </List.Item>
                        <List.Item
                            className="form-item"
                            thumb="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1495891182,3136101676&fm=26&gp=0.jpg"
                        >
                            <InputItem
                                type="password" placeholder="Repeat Password"
                                {...getFieldProps('passwords', {
                                    rules: [
                                        { required: true, message: '请再次输入想要注册的密码！' },
                                        { validator: this.validatePasswords },
                                    ],
                                })}
                                error={!!getFieldError('passwords')}
                                onErrorClick={() => {
                                    alert(getFieldError('passwords').join(' '));
                                }}
                            />
                        </List.Item>
                        <List.Item
                            className="form-item"
                            thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2949856858,1757183281&fm=26&gp=0.jpg"
                        >
                            <InputItem
                                placeholder="Email"
                                {...getFieldProps('email', {
                                    rules: [
                                        // 正则表达式匹配
                                        { pattern: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/, message: '请输入邮箱！'}
                                    ],
                                })}
                                error={!!getFieldError('email')}
                                onErrorClick={() => {
                                    alert(getFieldError('email').join(' '));
                                }}
                            />
                        </List.Item>
                        <List.Item
                            className="form-item"
                            thumb="data:image/jpeg;base64,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"
                        >
                            <InputItem
                                type="phone" placeholder="Phone"
                                {...getFieldProps('phone', {
                                    rules: [
                                        { pattern: /^1[0-9]{2} [0-9]{4} [0-9]{4}$/, message: '请输入手机号码！'},
                                    ],
                                })}
                                error={!!getFieldError('phone')}
                                onErrorClick={() => {
                                    alert(getFieldError('phone').join(' '));
                                }}
                            />
                        </List.Item>
                        {/* 验证码 */}
                        {/* <List.Item
                            className="form-item"
                            thumb="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1495891182,3136101676&fm=26&gp=0.jpg"
                        >
                            <div className="grid">
                                <InputItem
                                    onChange={(e) => { this.code_assignment(e) }}
                                    type="number" maxLength="6"
                                    placeholder="Code" className="code"
                                    {...getFieldProps('code', {
                                        // initialValue: 'little ant',
                                        rules: [
                                            { required: true, message: 'Please input code' },
                                            { validator: this.validateAccount },
                                        ],
                                    })}
                                    error={!!getFieldError('code')}
                                    onErrorClick={() => {
                                        alert(getFieldError('code').join('、'));
                                    }}
                                />
                                <span>&nbsp;&nbsp;</span>
                                <Button type="warning" size="small" onClick={this.onSend} className="send-code-button">发送验证码</Button>
                            </div>
                        </List.Item> */}
                        <List.Item className="form-item">
                            <Button type="primary" size="large" onClick={this.onFinish} className="login-form-button">注册</Button>
                        </List.Item>
                    </List>
                </form>
            </div>
        )
    }


    validateUsername = (rule, value, callback) => {
        // 是否为电话号码
        // 根据电信、移动、联通目前发行的号码，验证比较精确。
        // const regPhone =/^1[3|4|5|7|8][0-9]{9}$/;
        // 首位为1，共11位
        const regPhone = /^1[0-9]{10}$/;
        // 是否为邮箱
        const regEmail = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
        if (value && regPhone.test(value)) {
            callback(new Error('用户名不能为手机号码！'));
        } else if (value && regEmail.test(value)) {
            callback(new Error('用户名不能为邮箱！'));
        } else {
            callback();
        }
    }

    validatePasswords = (rule, value, callback) => {
        if (value === this.props.form.getFieldsValue().password) {
            callback();
        } else {
            callback(new Error('两次输入密码必须一致！'));
        }
    }

    onFinish = () => {
        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props.form.getFieldsValue());
                window.location.replace("/")
            } else {
                alert('Validation failed');
            }
        });
    }
}

RegisterCom = createForm()(RegisterCom);
export default RegisterCom;