/*1  导入*/
import React from  "react";
import ReactDOM from "react-dom"


// 3 创建无状态组件 因为只是接收数据
function CmtItem(props){
    return <div>
        <h2>评论人：{props.name}</h2>
        <p>评论内容：{props.content}</p>
    </div>
}
// 2 创建父组件
 class ComtList extends React.Component{
     constructor () {
         super();
         this.state ={
            ComtListData:[
                {id:0,name :"小雅",sex:"女",content:"42342353532"},
                {id:1,name :"s雅",sex:"男",content:"76575674324342"},
                {id:2,name :"t雅",sex:"女",content:"75675"},
                {id:3,name :"5雅",sex:"女",content:"fgffg"},
                {id:4,name :"33雅",sex:"男",content:"6666666666666"}
            ] 
         }
     }
     render(){
         return <div>
             <h1>这是评论列表</h1>
            {this.state.ComtListData.map(item =><CmtItem key ={item.id} {...item}></CmtItem> )}
         </div>
     }
 }

 // 3   使用ReactDom 把虚拟DOM 渲染到页面上 页面上面要创建好容器
ReactDOM.render(<ComtList></ComtList>,document.getElementById('app'));