
import React, { Component } from 'react'
import StyleButton from './StyleButton';

const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
  ];

export default class InlineStyleControls extends Component {
//   constructor(props){
//     super(props);
//   }

  render() {
    const currentStyle = this.props.editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map((type) =>
            <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                onToggle={this.props.onToggle.bind(this)}
                style={type.style}
            />
            )}
      </div>
    )
  }
}
