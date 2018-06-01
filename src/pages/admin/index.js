import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { AdminUsers , AdminArticles} from '../../router/index'


class Admin extends Component{

    render(){
        return (
        <div> 
            <div> Admin </div>
            <BrowserRouter>
                <Switch>
                    <Route path={`${this.props.match.path}/users`} component={AdminUsers}/>
                    <Route path={`${this.props.match.path}/articles`} component={AdminArticles}/>
                </Switch>
            </BrowserRouter>
        </div>
        )
    }
}

export default Admin;