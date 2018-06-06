import React, { Component } from 'react'

export default class Audio extends Component {
  render() {
    return (
        <audio controls src={this.props.src} style={this.props.style}/>
    )
  }
}
