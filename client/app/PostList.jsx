'use client'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'


function PostList() {
    const [posts,setPost]=useState({})

    const fetchPosts =async ()=>{
      const res=  await axios.get('http://localhost:4002/posts')
      setPost(res.data)
    }
    useEffect(()=>{
        fetchPosts()
    },[])
    // console.log(post)
    const renderPosts=Object.values(posts).map(post=>{
        return <div className='card' key={post.id}>
          <h2>{post.title}</h2>  
          <CommentList comments={post.comments}/>
          <CommentCreate postId={post.id}/>
        </div>
    })
  return (
    <div className=' flex justify-center flex-wrap content-center items-center justify-self-center my-8 flex-row gap-5'> 
        {renderPosts}
    </div>
  )
}

export default PostList