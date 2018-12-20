import React from  "react";
import ReactDOM from "react-dom"

var  user = {
    name :"2222",
    age: 21,
    address:"上海"
}

// 1.  class 关键字创建组件 必须继承自React.Component
// 2.  必须要有render()方法返回一个值
class Moive extends React.Component{
    // 在 class 关键字创建的组件不需要接受props参数，只需要 this.props.**** 直接使用就可以了
    render(){
        return <div>hhhhhhh {this.props.name}--------{this.props.age}--{this.props.address}</div>
    }
    // this 表示当前的组件实例对象
    // 在 class关键字创建的组件还是普通function创建的组件props 都是只读的
}
ReactDOM.render(<Moive {...user}></Moive>,document.getElementById('app'));