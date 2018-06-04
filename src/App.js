import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import { Home , Admin ,AdminLogin, Article , NotFound, ArticlePublish} from "./router/index"

class App extends Component {
  // constructor(props,context){
  //   super(props,context);
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="router-view">
            <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/login" component={AdminLogin}/>
               <Route path="/home" component={Home}/>
               <Route path="/admin" component={Admin}/>
               <Route exact path="/article/publish" component={ArticlePublish}/>  
               <Route path="/article/:id" component={Article}/>
               <Route component={ NotFound }/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
