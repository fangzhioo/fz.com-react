import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
        <img src={this.props.src} alt="加载失败！" style={this.props.style} width={this.props.width} height={this.props.height}/>
    )
  }
}
