import asyncComponent from '../../AsyncComponent';

export const Audio = asyncComponent(()=>import('./Audio'));
export const Image = asyncComponent(()=>import('./Image'));
export const Video = asyncComponent(()=>import('./Video'));
export const Link = asyncComponent(()=>import('./Link'));
