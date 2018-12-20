import React from "react"



export  default class BindEvent extends React.Component{
    constructor(){
        super()
    }
    // onClick  等事件名字要使用驼峰命名的方式
     // 这是一个实例方法  onClick 中的事件名字不能添加小括号，只能引用
    render(){
        return <div>
        {/* <button onClick={this.myClickHander}>点击</button> */}
        {/* 推荐使用下面的方法来绑定 */}
        <button onClick={() =>this.myClickHander()}>点击</button>
       {/* //  onClick 只接受function \ */}
       </div>
    }

    // 这是一个实例方法
    // myClickHander(){
    //     console.log("3333333333333")
    // }
    // 也可以修改为箭头函数
    myClickHander =() => {
        console.log("3333333333333")
    }
}