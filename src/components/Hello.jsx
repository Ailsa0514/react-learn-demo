import React from "react"


// 向外暴露一个组件的值
export default function Hello(props) {
	// props 是一个形参.可以被定义为任意的值,接收的是一个对象
	console.log(props)
	return <div>这是jsx语法.你懂吗?狗狗的名字:{props.name},狗狗的年龄:{props.age}</div>
}