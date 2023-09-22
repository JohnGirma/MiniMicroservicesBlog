'use client'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'


function PostList() {
    const [posts,setPost]=useState({})

    const fetchPosts =async ()=>{
      const res=  await axios.get('http://localhost:4000/posts')
      setPost(res.data)
    }
    useEffect(()=>{
        fetchPosts()
    },[])
    // console.log(post)
    const renderPosts=Object.values(posts).map(post=>{
        return <div key={post.id}>
          <h3>{post.title}</h3>  
          <CommentList postId={post.id}/>
          <CommentCreate postId={post.id}/>
        </div>
    })
  return (
    <div > 
        {renderPosts}
    </div>
  )
}

export default PostList