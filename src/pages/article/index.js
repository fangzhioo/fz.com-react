import React,{Component} from 'react';

class Article extends Component{

    render(){
        return (
            <div className="article-detail"> 
                <div>Article {this.props.match.params.id}</div>
                <div>
                    {console.log(this)}
                </div>
            </div>
        )
    }
}

export default Article;