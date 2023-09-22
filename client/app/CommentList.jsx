'use client'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'


function CommentList({postId}) {
    const [comments,setComments]=useState([])

    const fetchData =async ()=>{
      const res=  await axios.get(`http://localhost:4001/posts/${postId}/comments`)
      setComments(res.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(comments)
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