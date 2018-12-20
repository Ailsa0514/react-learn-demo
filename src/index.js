/*1  导入*/
import React from  "react";
import ReactDOM from "react-dom"
// 2 导入组件或者是样式表
// import CmtList from "@/components/CmtList"
// import BindEventValue from "@/components/BindEventValue";
 // 3   使用ReactDom 把虚拟DOM 渲染到页面上 页面上面要创建好容器
// ReactDOM.render(<div><CmtList></CmtList><BindEvent></BindEvent></div>,document.getElementById('app'));
ReactDOM.render(<div><BindEventValue></BindEventValue></div>,document.getElementById('app'));