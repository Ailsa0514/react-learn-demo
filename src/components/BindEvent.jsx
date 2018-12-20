import React from "react"



export  default class BindEvent extends React.Component{
    constructor(){
        super()
        this.state = {
         mag :" 这是什么吗?"   ,
         arg: "4242423"
        }
    }
    // onClick  等事件名字要使用驼峰命名的方式
     // 这是一个实例方法  onClick 中的事件名字不能添加小括号，只能引用
    render(){
        return <div>
        {/* //  onClick 只接受function \ */}
        <button onClick={ () => this.show("11","223232") }>点击</button>
        <h3>{this.state.mag}</h3>
       </div>
    }

    // 这是一个实例方法
    // myClickHander(){
    //     console.log("3333333333333")
    // }
    // 也可以修改为箭头函数
    show =(a,b) => {
        // 1 在react 中推荐使用 this.setState 来改变值 其他的方式不能在页面中展示
        //2  在this.setState 中只能更新不会覆盖掉其他的值
        // 3  this.setState 方法的执行时异步的
                //  this.setState({
                // mag : "zheshi:" + a + b
                // })
                // console.log(this.state.mag)
            //    }

        //  4  如果想调用最新的值，就要使用  this.setState({},callback)
     this.setState({
         mag : "zheshi:" + a + b
     },function(){
        console.log(this.state.mag)
      })
    }
}