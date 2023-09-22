'use client'
import React,{useState,FormEvent } from 'react'
import axios from 'axios'

function PostCreate() {
    const [title,setTitle]=useState('')
    const onSubmit=async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        await axios.post('http://localhost:4000/posts',{

            title
        })
        setTitle('')
    }
  return (
    <div> 
        <form onSubmit={onSubmit}>
            <label htmlFor="">Title</label>
            <input type="text"
             value={title}
              onChange={e=>setTitle(e.target.value)} />
              <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default PostCreate