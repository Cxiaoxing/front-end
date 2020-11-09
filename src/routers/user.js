import React from 'react';
import '../scss/user.scss'
import { Icon } from 'antd-mobile';
import Student from '../views/student';
import Teacher from '../views/teacher'


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: "cxx"
        }
    }

    render() {
        return (
            <div>
                <div className="page_header">
                    <Icon className="page_icon" type="left" size="lg" onClick={this.onBack} />
                    <span className="page_title">个人中心</span>
                </div>
                <div className="user_display">
                    <img id="user_photo" alt="head_protrait"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601140293533&di=0302b7ada804b78c4d514ff7a0c722b5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20161228%2Feb041943e6b8487d8ad224f79d680537_th.jpeg"
                    />
                    <div id="user_name">{this.state.user_name}</div>
                </div>
                {/* <Teacher /> */}
                <Student />
            </div>
        )
    }


    onChange = (key) => {
        console.log(key);
    }
}

export default User;