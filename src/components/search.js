import React from 'react';
import '../scss/questions.scss'
import { SearchBar, WhiteSpace } from 'antd-mobile';


class SearchCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
        }
    }

    render(){
        return(
            <div>
                <SearchBar
                    value={this.state.value}
                    placeholder="请输入标题或编号"
                    ref={ref => this.manualFocusInst = ref}
                    onChange={(e)=>{this.onChange(e)}}
                    onSubmit={(e) => { this.onSubmit(e) }}
                    onCancel={this.onCancel}
                    onClear={this.onClear}
                />
                <WhiteSpace />
            </div>
        )
    }

    onChange = (value)=>{
        this.setState({
            value: value
        })
    }

    onSubmit = (key) => {
        let list = []
        this.props.detail.forEach(item=>{
            if(item.title.indexOf(key)>=0||
                item.id.toString().indexOf(key)>=0){
                    list.push(item)
                }
        })
        if(list!==[]){
            this.props.synchronous(list, true)
        }
    }

    onCancel=()=>{
        this.setState({
            value:'',
        })
        this.props.synchronous(false, false)
    }

    onClear = ()=>{
        this.setState({
            value: ''
        })
    }
}


export default SearchCom;