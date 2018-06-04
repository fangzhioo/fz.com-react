import React from 'react';
import ReactDOM from 'react-dom';
import './assets/common/css/base.css';
import 'antd/dist/antd.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
     document.getElementById('root')
);
registerServiceWorker();


const yin = `
五十音 --- 五段十行\n
---------------------------- \n
     a段  i段  u段  e段  o段  \n
      a    i   u    e    o   \n
a行   あ　 い　 う　 え　 お   \n
      ka   ki  hu   he   ko  \n
ka行  か　 き　 く　 け　 こ   \n
      sa   si  su   se   so  \n
sa行  さ　 し　 す　 せ　 そ   \n
      ta   ti  tu   te   to  \n
ta行  た　 ち　 つ　 て　 と   \n
      na   ni  nu   ne   no  \n
na行  な　 に　 ぬ　 ね　 の   \n
      ha   hi  hu   he   ho  \n
ha行  は　 ひ　 ふ　 へ　 ほ   \n
      ma   mi  mu   me   mo  \n
ma行  ま　 み　 む　 め　 も   \n
      ya   i   yu   e    yo  \n
ya行  や　 い　 ゆ　 え　 よ   \n
      ra   ri  ru   re   ro  \n
ra行  ら　 り　 る 　れ 　ろ   \n
      wa   i   u    e    wo  \n
wa行  わ　 い　 う　 え　 を   \n     
`;
console.log(yin);
console.log("%c", "padding:85px 100px;line-height:300px;background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526038274504&di=e637675e32c922aac70d5b434b5a549b&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd4628535e5dde7113b23a59bacefce1b9c1661ee.jpg');");
