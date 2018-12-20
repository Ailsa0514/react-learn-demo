import React from 'react'


// 导入css 样式表不需要进行模块化,直接引入即可
// eg: import "XXX.css"
// 导入scss样式表
import CssObj from "@/css/style.scss"
console.log(CssObj)
// 导入使用的组件
import CmtItem from "@/components/CmtItem"
//  创建父组件
export default class CmtList extends React.Component{
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
            {/* 访问global()中的类名，不会被模块化的类名可以全局生效 */}
            {/* 方案一  使用+ 空格连接 */}
            {/* <h1 className={CssObj.title + " tt"}>这是评论列表</h1> */}
            {/* 使用数据的方法，join(" ") 空格一定要加 */}
            {/* <h1 className={[CssObj.title, "tt"].join(" ")}>这是评论列表</h1> */}
            <h1 className={[CssObj.title,"tt"].join(" ")}>这是评论列表</h1>
            {/* 对象展开的方式来实现对象的传递 */}
           {this.state.ComtListData.map(item =><CmtItem key ={item.id} {...item}></CmtItem> )}
        </div>
    }
}
