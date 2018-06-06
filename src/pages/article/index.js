import React,{Component} from 'react';
import { ArticlePublish,ArticleDetail } from '../../router/index';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

class Article extends Component{

    render(){
        return (
            <div className="article-detail"> 
                <div>Article </div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path={`${this.props.match.path}/publish`} component={ArticlePublish}/>
                            <Route path={`${this.props.match.path}/:article_id`} component= {ArticleDetail} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Article;