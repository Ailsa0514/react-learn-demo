
import React from "react"
import ReactDOM from "react-dom"

// 组件的名字必须为大写
// function Hello() {
// 	return <div>这是jsx语法.你懂吗?</div>
// }

// 组件传值
var dog = {
	name : "大黄",
	age :"15个月",

}
function Hello(props) {
	// props 是一个形参.可以被定义为任意的值 为了统一都叫这个名字
	console.log(props)
	return <div>这是jsx语法.你懂吗?狗狗的名字:{props.name},狗狗的年龄:{props.age}</div>
}
// 传值的方式一    使用对象展开的方式传值
// ReactDOM.render(<Hello {...dog}></Hello>,document.getElementById("app"))
// 传值的方式二    将对象的值挨个传入
ReactDOM.render(<Hello name={dog.name} age={dog.age}></Hello>,document.getElementById("app"))

