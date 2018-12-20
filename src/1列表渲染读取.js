

/*1  导入*/
import React from "react"     //创建组件    虚拟DOM元素   生命周期
import ReactDOM from "react-dom"   //创建好的组件放在页面展示的功能


// 2   创建虚拟DOM元素
/* React.createElement(参数1,参数2,参数3,参数n)
	参数1： 创建的元素的类型，字符串，表示元素的名称
	参数2： 是一个对象或者是null ,表示当前的DOM 属性
	参数3:  子节点(包括其他的虚拟DOM 获取文本子节点)
	参数N:  其他的子节点
*/
// const myh1 = React.createElement("h1",{id:'myh1',title:'这是的学习文件'},"我的React学习")


// const div = React.createElement("div",{id:'mydiv'},"这是一个div")
// 使用jsx 的语法来操作数据
const div = <div id="mydiv">343434343243434</div>;
const p =<p>aaaaaaaaaaaaaaa</p>
const arr =[
    <h3>kkk</h3>,
    <h2>544453</h2>,   //这是一个对象的形式不是标签
    <h1>hhhh</h1>
]

const res = ["杨玉环","唐高宗","秦始皇","敦煌莫高窟"]


// 3   使用ReactDom 把虚拟DOM 渲染到页面上 页面上面要创建好容器
// 虚拟DOM是用js的对象的形式,来表示DOM和DOM 之间的嵌套关系
ReactDOM.render(<div>
			{/*{arr}*/}
			{res.map((item,index)=><div key={index}><li>{index}=---{item}</li></div>)} 
			
			{p}</div>,document.getElementById('app'))   




/*
     ReactDOM.render(myh1,"#app")   //报错 Target container is not a DOM element.  第二个参数是DOM元素而不是一个选择器
     
 */