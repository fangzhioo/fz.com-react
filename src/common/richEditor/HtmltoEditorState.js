import React from 'react';
import { 
    CompositeDecorator,
    ContentState,
    EditorState,
    convertFromHTML} from 'draft-js';
import {Audio,Image,Video,Link} from './EditorComponent/index'

class HtmltoEditorState {

    constructor(html){
        this.html = html;
        // 装饰器
        this.decorator = new CompositeDecorator([
            {
                strategy: findLinkEntities,
                component: oLink,
            },
            {
                strategy: findImageEntities,
                component: oImage,
            },
            {
                strategy: findAudioEntities,
                component: oAudio,
            },
            {
                strategy: findVideoEntities,
                component: oVideo,
            }
        ]);

    }

    getContent(){
        // html 处理
        const blocksFromHTML = convertFromHTML(this.html);
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap,
        );
        debugger
        return EditorState.createWithContent(
            state,
            this.decorator,
        );
    }

}

// 发现对应标签
// link a
const findLinkEntities = (contentBlock, callback, contentState)=>{
    contentBlock.findEntityRanges(
        (character) => {
          const entityKey = character.getEntity();
          return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'LINK'
          );
        },
        callback
      );
}
// image
const findImageEntities = (contentBlock, callback, contentState)=>{
    contentBlock.findEntityRanges(
        (character) => {
          const entityKey = character.getEntity();
          return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'IMAGE'
          );
        },
        callback
      );
}
// audio
const findAudioEntities = (contentBlock, callback, contentState)=>{
    contentBlock.findEntityRanges(
        (character) => {
          const entityKey = character.getEntity();
          return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'AUDIO'
          );
        },
        callback
      );
}
// video
const findVideoEntities = (contentBlock, callback, contentState)=>{
    contentBlock.findEntityRanges(
        (character) => {
         debugger
          const entityKey = character.getEntity();
          return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'VIDEO'
          );
        },
        callback
      );
}

// 对应标签的组件模板
// link a
const oLink = (props) => {
    const {url,styles} = props.contentState.getEntity(props.entityKey).getData();
    return (
        <Link href={url} style={styles}>{props.children}</Link>
    );
};
// img
const oImage = (props) => {
    const {height,src,width,styles} = props.contentState.getEntity(props.entityKey).getData();
    return (
      <Image src={src} alt='图片加载失败！' height={height} width={width} style={styles} />
    );
};
// audio
const oAudio = (props) => {
    const {src,styles} = props.contentState.getEntity(props.entityKey).getData();
    return (
      <Audio src={src} style={styles} />
    );
};
// video
const oVideo = (props) => {
    const {src,styles} = props.contentState.getEntity(props.entityKey).getData();
    return (
      <Video src={src} style={styles} />
    );
};

export default HtmltoEditorState;