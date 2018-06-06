import React, { Component } from 'react'
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import ShowDown from 'showdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default class DraftjsEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            editorState: undefined
        }
    }

    handleEditorChange(value){
        this.setState({
            editorState:value
        })
        if(this.props.handleEditorChange){
            let converter = new ShowDown.Converter();
            let text =draftToMarkdown(convertToRaw(value.getCurrentContent())); // 转为text
            let content= converter.makeHtml(text); // text转html
            this.props.handleEditorChange(content)
        }
    }

    render() {
        const { editorState } = this.state;
        return (
        <div>
            <Editor
                toolbarClassName="rdw-storybook-toolbar"
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.handleEditorChange.bind(this)}
            />
            <textarea   
            disabled
            className="rdw-storybook-textarea"
            value={ editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
         />
       </div>
        )
    }
}
