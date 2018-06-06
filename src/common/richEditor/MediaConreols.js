import React, { Component } from 'react'
import { EditorState,AtomicBlockUtils } from 'draft-js';
const MEDIA_TYPES = [
    {label:'audio',style:'audio'},
    {label:'image',style:'image'},
    {label:'video',style:'video'}
];

export default class MediaControls extends Component {
    constructor(props){
        super(props);
        this.state = {
            editorState: this.props.editorState || undefined,
            showURLInput:false,
            url: '',
            urlType:''
        }
    }

    handleAddClick(type){
        this.setState({
            showURLInput:true,
            url:'',
            urlType:type
        })
    }
    handleConfirmClick(){
        const {editorState, url , urlType} = this.state;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            urlType,
            'IMMUTABLE',
            {src: url}
          );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();  
        const newEditorState = EditorState.set(
            editorState,
            {currentContent: contentStateWithEntity}
          );
        const n = AtomicBlockUtils.insertAtomicBlock(newEditorState,entityKey,' ')
        this.setState({
            showURLInput: false,
            url:''
        })
        this.props.onConfirm(n);
    }
    handleURLChange(e){
        this.setState({
            url:e.target.value
        })
    }
    render() {
        let urlInput;
        if(this.state.showURLInput){
            urlInput= <div>
              <input
                    onChange={this.handleURLChange.bind(this)}
                    ref="url"
                    type="text"
                    value={this.state.url}
                />
                <button onClick={this.handleConfirmClick.bind(this)}>确定</button>
              </div>  
        }
        return (
        <div className="RichEditor-controls">
        {
            MEDIA_TYPES.map((type)=>{
                return (
                    <button 
                    key={type.label}
                    onClick={this.handleAddClick.bind(this,type.style)}>
                    {type.label}
                    </button>
                )
            })
        }   
        {urlInput}
        
        </div>
        )
    }
}

