'use client'
import React from 'react'



function CommentList({comments}) {
   
   
    const rederComments=comments.map(comment=>{
        return <li key={comment.id}> {comment.content} </li>
    })
  return (
    <ui > 
        {rederComments}
    </ui>
  )
}

export default CommentList