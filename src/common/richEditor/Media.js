import React, { Component } from 'react'
import {Audio,Image,Video} from './EditorComponent/index'
export default class Media extends Component {
  render() {
    const entity = this.props.contentState.getEntity(
        this.props.block.getEntityAt(0)
    );
    const data = entity.getData();
    const type = entity.getType();

    let media;
    if (type === 'audio') {
        media = <Audio src={data.src} />;
    } else if (type === 'image') {
        media = <Image src={data.src} width={data.width || 300} height={data.height || 250} />;
    } else if (type === 'video') {
        media = <Video src={data.src} />;
    }

    return media;
  }
}
