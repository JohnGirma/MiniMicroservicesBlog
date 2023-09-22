'use client'
import React,{useState } from 'react'
import axios from 'axios'

function CommentCreate( {postId}) {
    const [content,setContent]=useState('')
    const onSubmit=async (e)=>{
        e.preventDefault()
       
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{

            content
        })
        setContent('')
    }
  return (
    <div  class="w-full max-w-xs"> 
        <form onSubmit={onSubmit} class=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label htmlFor="" class="block text-gray-700 text-sm font-bold mb-2">New Comment</label>
            <input type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             value={content}
              onChange={e=>setContent(e.target.value)} />
              <button 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CommentCreate