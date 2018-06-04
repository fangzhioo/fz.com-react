import React from 'react';
import Editor from 'wangeditor';
import { Button } from 'antd';

class PublishArticle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editorContent:''
        }
    }

    componentDidMount(){
        const editorEl = this.refs.editorEl;
        const editor = new Editor(editorEl);
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent:html
            })
        }
        editor.create();
    }

    handleSubmitContent(){
        console.log(this.state.editorContent);

    }

    render(){
        return (
            <div>
                publish
                {/* 富文本编辑器 */}
                <div className="wang-edit" ref="editorEl"></div>
                <div>
                    <Button onClick={this.handleSubmitContent.bind(this)}>提交</Button>
                </div>
                <div>{this.state.editorContent}</div>
            </div>
        )
    }
}

export default PublishArticle;