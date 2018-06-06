import React, { Component } from 'react'
import Editor from 'wangeditor';

export default class componentName extends Component {
    constructor(props){
        super(props);
        let content = this.props.editorContent || ''; 
        this.state = {
            editorContent: content
        }
    }
    
    componentDidMount(){
        const editorEl = this.refs.editorEl;
        const editor = new Editor(editorEl);       
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent:html
            });
            if(this.props.handleEditorChange){
                this.props.handleEditorChange(html);
            }          
        }
        editor.create();
        editor.txt.html(this.state.editorContent);
    }

    render() {
        return (
        <div>
            {/* 富文本编辑器 */}
            <div className="wang-edit" ref="editorEl"></div>
        </div>
        )
    }
}
