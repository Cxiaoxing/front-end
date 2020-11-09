import React from 'react'
import {Switch, Route, Router, HashRouter, Link} from 'react-router-dom'
import Home from './routers/home'
import Login from './routers/login'
import User from './routers/user'
import QuestionDetail from './routers/question_detail'
import CompetitionDetail from './routers/competition_detail'
import Test from './routers/test'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <HashRouter>
                <Switch>
                    {/* exact 绝对绑定 */}
                    <Route component={Home} exact path="/"/>
                    <Route component={Login} path="/login"/>
                    <Route component={User} path="/user"/>
                    <Route component={QuestionDetail} path="/question_detail"/>
                    <Route component={CompetitionDetail} path="/competition_detail"/>
                    <Route component={Test} path="/test"/>
                </Switch>
            </HashRouter>
        )
    }
}

export default App;