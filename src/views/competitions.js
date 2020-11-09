import React from 'react';
import '../scss/questions.scss'
import Competition from '../components/competition'
import SearchCom from '../components/search'


class Competitions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            competitions_detail: [],
            new_detail: [],
            search_list:[],
            isSearch: false,
        }
    }

    componentWillMount(){
        let competitions_detail = [
            {
                title: "第五届新生赛",
                id: 1,
                start_time: "2020-1-19 19:00",
                during_time: 3,
                participant_number: 756,
                difficulty: 3,
                tag: "ACM"
            },
            {
                title: "第四届新生赛",
                id: 2,
                start_time: "2019-12-14 13:00",
                during_time: 5,
                participant_number: 367,
                difficulty: 4,
                tag: "ACM"
            },
            {
                title: "xxxxx社团比赛",
                id: 3,
                start_time: "2019-12-8 13:00",
                during_time: 4,
                participant_number: 654,
                difficulty: 2,
                tag: "TEST"
            },
            {
                title: "第三届xxxxxxxxxxxx新生赛",
                id: 4,
                start_time: "2019-11-17 19:00",
                during_time: 4,
                participant_number: 865,
                difficulty: 3,
                tag: "ACM"
            },
            {
                title: "xxxxx班级测验",
                id: 5,
                start_time: "2019-11-1 14:00",
                during_time: 3,
                participant_number: 463,
                difficulty: 4,
                tag: "TEST"
            }
        ]
        this.setState({
            competitions_detail: competitions_detail,
            new_detail: competitions_detail
        })
    }

    render() {
        return (
            <div>
                <SearchCom detail={this.state.competitions_detail} synchronous={this.synchronous_search} />
                <Competition detail={this.state.new_detail} />
            </div>
        )
    }

    synchronous_search=(list, isSearch)=>{
        if(list){
            this.setState({
                new_detail: list,
                search_list: list,
                isSearch: isSearch
            })
        }else{
            this.setState({
                new_detail: this.state.competitions_detail,
                search_list: [],
                isSearch: isSearch
            })
        }
    }
}


export default Competitions;