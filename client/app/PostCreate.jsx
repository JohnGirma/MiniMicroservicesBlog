'use client'
import React,{useState,FormEvent } from 'react'
import axios from 'axios'

function PostCreate() {
    const [title,setTitle]=useState('')
    const onSubmit=async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:4000/posts',{

            title
        })
        setTitle('')
    }
  return (
    <div  class="w-full max-w-xs"> 
    <form onSubmit={onSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label htmlFor="" class="block text-gray-700 text-sm font-bold mb-2">Post</label>
        <input type="text"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
              onChange={e=>setTitle(e.target.value)} />
              <button 
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">Submit</button>
        </form>
    </div>
  )
}

export default PostCreate