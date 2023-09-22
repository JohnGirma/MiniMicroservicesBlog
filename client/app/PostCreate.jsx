'use client'
import React,{useState} from 'react'
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
    <div className="flex min-h-screen flex-col items-center  p-10"> 
        <form onSubmit={onSubmit} className="flex min-h-screen flex-col items-center  ">
            <label htmlFor="">Title</label>
            <input type="text"
             value={title}
              onChange={e=>setTitle(e.target.value)} />
              <button class="bg-indigo-500 " type="button">Submit</button>
        </form>
    </div>
  )
}

export default PostCreate