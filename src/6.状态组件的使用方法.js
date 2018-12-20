import React from  "react";
import ReactDOM from "react-dom"

var  user = {
    name :"2222",
    age: 21,
    address:"上海"
}

// 1.  class 关键字创建组件（叫做有状态组件） 必须继承自React.Component
// 2.  必须要有render()方法返回一个值
class Moive extends React.Component{
     constructor (){
        // super() 必须在值之前调用
         super();
        //  这是可以读取和改变的
         this.state ={
             msg:"我是class 创建的组件"
         }
     }
    // 在 class 关键字创建的组件不需要接受props参数，只需要 this.props.**** 直接使用就可以了
    render(){
        //  this.state 中的数据是可读可写的
        this.state.msg ="这个值被我修改了！哈哈"
        return <div>hhhhhhh {this.props.name}--------{this.props.age}--{this.props.address}<h1>{this.state.msg}</h1></div>
    }
    //{注意： this 表示当前的组件实例对象}
    // 在 class关键字创建的组件还是普通function创建的组件props 都是只读的
}
// class 创建的组件 （有状态组件）能够接受props 还能有自己的数据，还有生命周期
// function 创建的组件没有自己的数据 （无状态组件）
ReactDOM.render(<Moive {...user}></Moive>,document.getElementById('app'));