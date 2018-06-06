import React from 'react';
import WangEditor from './wangeditor';
import DraftjsEditor from './draftjseditor';
import { Button } from 'antd';

class PublishArticle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editorContent:'',
            editorType:'markdown'
        }
    }

    handleEditorChange(value){
        this.setState({
            editorContent:value 
        })
    }

    handleToggleEditor(type){   
        this.setState({
            editorType:type,
            editorContent:''
        })
    }

    handleSubmitContent(){
        console.log(this.state.editorContent);
    }

    render(){
        return (
            <div>
                publish
                <Button onClick={this.handleToggleEditor.bind(this,'markdown')}>markdown</Button>
                <Button onClick={this.handleToggleEditor.bind(this,'html')}>html</Button>

                <Editor editorType={this.state.editorType} handleEditorChange={this.handleEditorChange.bind(this)}  editorContent={this.state.editorContent}/>
                <div>
                    <Button onClick={this.handleSubmitContent.bind(this)}>提交</Button>
                </div>
                <div>{this.state.editorContent}</div>

                <br />
                <hr />
                <br />

                <div className="article-content" dangerouslySetInnerHTML={
                    {__html: this.state.editorContent}
                }></div>
            </div>
        )
    }
}

const Editor = (props)=>{
    const editorType = props.editorType;
    if( editorType === 'html'){
        return (
            <WangEditor handleEditorChange={props.handleEditorChange.bind(this)} editorContent={props.editorContent} / >
        )
    }
    if( editorType === 'markdown'){
        return (
            <DraftjsEditor handleEditorChange={props.handleEditorChange.bind(this)} editorContent={props.editorContent} />
        )
    }
}

export default PublishArticle;