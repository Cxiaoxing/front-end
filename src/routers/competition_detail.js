import React from 'react';
import '../scss/competitions.scss';
import { Icon } from 'antd-mobile';
import Question from '../components/question'
import CountDown from '../components/countDownCom'


class CompetitionDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            questions_detail: [],
        }
    }

    componentWillMount() {
        let questions_detail = [
            {
                id: 1,
                title: "小明和小红",
                content: "题目哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                passing_rate: "78%",
                submit_number: "2331",
                difficulty: 3,
                tags: ["111", "222", "444"]
            },
            {
                id: 2,
                title: "小明和小兰",
                content: "题目哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                passing_rate: "65%",
                submit_number: "7757",
                difficulty: 1,
                tags: ["222", "333"]
            },
            {
                id: 3,
                title: "小红和小蓝",
                content: "题目哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                passing_rate: "46%",
                submit_number: "3567",
                difficulty: 4,
                tags: ["666", "333"]
            },
            {
                id: 4,
                title: "小蓝和小兰",
                content: "题目哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                passing_rate: "7%",
                submit_number: "978",
                difficulty: 2,
                tags: ["222", "444", "555"]
            },
            {
                id: 5,
                title: "小蓝和小明",
                content: "题目哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                passing_rate: "13%",
                submit_number: "648",
                difficulty: 3,
                tags: ["111", "555", "666"]
            }
        ]
        this.setState({
            questions_detail: questions_detail
        })
    }

    componentDidMount() {
        let search = this.props.history.location.search
        search = search.substr(1, search.length);
        this.setState({
            id: search
        })
    }

    render() {
        return (
            <div className="question_detail">
                <div className="page_header">
                    <Icon className="page_icon" type="left" size="lg" onClick={this.onBack} />
                    <span className="page_title">比赛 {this.state.id}</span>
                
                <div className="countdown">
                    <CountDown hours="1" minutes="45" />
                </div>
                </div>
                <Question detail={this.state.questions_detail} />
            </div>
        )
    }

    onBack = () => {
        window.history.back(-1);
    }
}

export default CompetitionDetail;