import React from 'react';
import { Editor , EditorState, RichUtils , getDefaultKeyBinding } from 'draft-js';
import HtmltoEditorState from './HtmltoEditorState';
import InlineStyleControls from './InlineStyleControls';
import BlockStyleControls from './BlockStyleControls';
import MediaControls from './MediaConreols';
import Media from './Media';
import './richEditor.css';

  // Custom overrides for "code" style.
  const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

  function mediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
      return {
        component: Media,
        editable: false,
      };
    }

    return null;
  }

  function getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }

class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    let h = `
        <b>Bold text</b>, <i>Italic text</i><br/ ><br />
        <a href="http://www.facebook.com">Example link</a><br /><br/ >
        <audio src="./media.mp3" />
        <video src="./media.mp4" />
        <img src="http://img.zcool.cn/community/010f87596f13e6a8012193a363df45.jpg" height="112" width="200" />
        `; 
    let mo = EditorState.createEmpty();
    let c = new HtmltoEditorState(h).getContent();

    this.state = {
        editorState: c||mo
    };
    // 这里定义的方法 均可以使用props的方式传递
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);                                                                           
 }

 _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  handleMediaConfirm(newEditorState){
    this.setState({
        editorState:newEditorState
    })
  }

  
  render() {
        const {editorState} = this.state;

          // If the user changes block type before entering any text, we can
          // either style the placeholder or hide it. Let's just hide it now.
          let className = 'RichEditor-editor';
          var contentState = editorState.getCurrentContent();
          if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
              className += ' RichEditor-hidePlaceholder';
            }
          }

          return (
            <div className="RichEditor-root">
              <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType.bind(this)}
              />
              <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle.bind(this)}
              />
              <MediaControls 
                editorState={editorState} 
                onConfirm={this.handleMediaConfirm.bind(this)}
                />
              <div className={className} onClick={this.focus}>
                <Editor
                  blockRendererFn = {mediaBlockRenderer}
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  keyBindingFn={this.mapKeyToEditorCommand}
                  onChange={this.onChange}
                  placeholder="Tell a story..."
                  ref="editor"
                  spellCheck={true}
                />
              </div>
            </div>
          );
  }
}

export default RichEditor;