import React from 'react'


//  创建无状态组件 因为只是接收数据
export default function CmtItem(props){
    return <div>
        <h2>评论人：{props.name}</h2>
        <p>评论内容：{props.content}</p>
    </div>
}