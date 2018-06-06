import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    return (
        <a href={this.props.url} style={this.props.style}>{this.props.children}</a>
    )
  }
}
