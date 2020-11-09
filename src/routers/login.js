import React from 'react';
import '../scss/login.scss'
import LoginCom from '../components/loginCom'
import RegisterCom from '../components/registerCom';
import { Icon } from 'antd-mobile';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }

    render() {
        return (
            <div className="login">
                <div className="page_header">
                    <Icon className="page_icon" type="left" size="lg" onClick={this.onBack} />
                </div>
                <div className="form-body">

                    {
                        this.state.isLogin ?
                            <LoginCom onChange={this.onChange} /> :
                            <RegisterCom onChange={this.onChange} />
                    }
                </div>
            </div>
        )
    }

    onBack = () => {
        window.history.back(-1);
    }


    onChange = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

}

export default Login;