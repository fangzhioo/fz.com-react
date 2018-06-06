import React from 'react';
import { message } from 'antd';

class ArticleDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            article:'',
            hasContent:false
        }
    }

    componentWillMount(){
        let article_id = this.props.match.params.article_id;
        let url = `articles/find/${article_id}`;
        window.$http.get(url).then(res=>{
            if(res.data.resp_code === "000000"){
                this.setState({
                    article: res.data.result,
                    hasContent:true
                })
            }else{
                message.info(res.data.resp_message);
            }
        }).catch(err=>{
            message.error("获取文章内容失败！");
        })
    }

    render(){
        return (
            <div>
                文章id为 {this.props.match.params.article_id}
                <hr />
                <Article hasContent={this.state.hasContent} content={this.state.article}/ >
            </div>
        )

    }

}

const Article = (props)=>{
    const hasContent = props.hasContent;
    const content = props.content;
    if(hasContent){
        return (
            <div>
                <div className="article-title">{content.title}</div>
                <div className="article-created">{content.created}</div>
                <div className="article-hot">
                    <span>阅读数：{content.hits}</span>
                    <span>评论数：{content.commentsNum}</span>
                </div>
                <div className="article-content" dangerouslySetInnerHTML={
                {__html:content.content}
                }></div>
            </div>
        )
    }else{
        return (
            <div>
                没有内容！
            </div>
        )
    }
}

export default ArticleDetail;