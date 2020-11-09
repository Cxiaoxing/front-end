import React from 'react';
import { LogoutRequest, GetInfoRequest } from '../api/account'
import CountDown from '../components/countDownCom'


class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <button onClick={this.checkCookie}>check cookie</button>
                <button onClick={this.logout}>logout</button>
                <button onClick={this.getInfo}>getInfo</button>
                <CountDown hours="1" minutes="45" />
            </div>
        )
    }
    //读取cookies 
    getCookie = (name) => {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return false;
    }

    checkCookie = () => {
        if ( document.cookie){
            console.log("okk")
            return false;
        } else {
            console.log("not")
            return true;
        }
    }

    logout = () => {
        LogoutRequest().then(response => {
            console.log(response)
        }).catch(Error => {
            console.log(Error)
            alert('登出失败！');
        })
    }

    getInfo=()=>{
        GetInfoRequest().then(response => {
            console.log(response.data)
        }).catch(Error => {
            console.log(Error)
            alert('获取信息失败！');
        })
    }

}

export default Test;