import React, { Component } from 'react'

export default class Video extends Component {
  render() {
    return (
        <video controls src={this.props.src} style={this.props.style} />
    )
  }
}
