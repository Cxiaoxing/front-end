import React from 'react';
import '../scss/questions.scss'
import Question from '../components/question'
import SearchCom from '../components/search'
import Filter from '../components/filter'


class Questions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions_detail: [],
            new_detail: [],
            search_list: [],
            isSearch: false,
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
            questions_detail: questions_detail,
            new_detail: questions_detail
        })
    }

    render() {
        return (
            <div>
                <SearchCom detail={this.state.questions_detail} synchronous={this.synchronous_search} />
                <Filter detail={this.state.isSearch ? this.state.search_list : this.state.questions_detail}
                    synchronous={this.synchronous_filter}
                />
                <br />
                <Question detail={this.state.new_detail} />
            </div>
        )
    }

    synchronous_search = (list, isSearch) => {
        if (list) {
            this.setState({
                new_detail: list,
                search_list: list,
                isSearch: isSearch
            })
        } else {
            this.setState({
                new_detail: this.state.questions_detail,
                search_list: [],
                isSearch: isSearch
            })
        }
    }

    synchronous_filter = (list) => {
        console.log("questions页面的筛选同步")
        console.log(list)
        this.setState({
            new_detail: list,
        })
    }
}

export default Questions;