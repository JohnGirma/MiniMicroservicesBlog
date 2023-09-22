'use client'
import React from 'react'



function CommentList({comments}) {
   
   
    const rederComments=comments.map(comment=>{
        let content;
        if(comment.status==='approved'){
            content=comment.content
        } 
        if(comment.status==='pending'){
            content='awaiting moderation'
        } 
        if(comment.status==='rejected'){
            content='This comment is rejected'
        }
        return <li key={comment.id}> {content} </li>
    })
  return (
    <ui > 
        {rederComments}
    </ui>
  )
}

export default CommentList