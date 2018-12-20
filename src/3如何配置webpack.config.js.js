import React from "react"
import ReactDOM from  "react-dom"

// import Hello from "./components/Hello.jsx"
// 因为没有配置默认的扩展名称使用,所以就必须引入Hello.jsx

// 在webpack.config.js 中添加配置 .jsx
//    resolve:{
// 	   extensions:[".js",".jsx",".json"]   //默认补全以这些结尾的文件
//    }
import Hello from "@/components/Hello"
// 组件传值
var dog = {
	name : "大黄",
	age :"15个月",

}
ReactDOM.render(<Hello name={dog.name} age={dog.age}></Hello>,document.getElementById("app"))