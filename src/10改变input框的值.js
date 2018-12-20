import React from "react"



export  default class BindEventValue extends React.Component{
    constructor(){
        super()
        this.state = {
         mag :" 这是什么吗?",
        }
    }
      // onClick  等事件名字要使用驼峰命名的方式
     // 这是一个实例方法  onClick 中的事件名字不能添加小括号，只能引用
    render(){
        return <div>
        {/* //  onClick 只接受function \ */}
        <input type="text" ref="txt" value={this.state.mag} style={{width:"100%"}} onChange={(e) => {this.textChange(e)}}/>
        <button onClick={ () => this.show("11","223232") }>点击</button>
        <h3>{this.state.mag}</h3>
       </div>
    }
   /**
    * input 中的事件绑定
    * 
    * 1  必须要绑定 onChange 事件
    * 2  数据的获取使用event 事件 或者是 ref="txt"  使用this.refs.值 获取
    * 3  使用this.setState 改变文本框的值
    * 
    */



    // 这是一个实例方法
    // myClickHander(){
    //     console.log("3333333333333")
    // }
    // 每当文本框变化的时候就会有改变值
    textChange =(e) => {
        // console.log(e.target.value);  //方案一   获取当前的数据
        // console.log(this.refs.txt.value);  //方案二   获取当前的数据
        const txt = e.target.value;
        this.setState({
            mag : txt
        })
    }
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