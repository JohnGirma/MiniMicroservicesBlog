const express = require('express')
const bodyParser =require('body-parser')
const cors = require('cors')
const axios= require('axios')
//generate a rondom no
// const {randomBytes}=require('crypto')

const app =express()
app.use(bodyParser.json())

 
app.use(cors())

const posts={}

const handleEvents=(type,data)=>{
    if (type==='PostCreatedEvent'){
        const{id,title}=data
        posts[id]={id,title,comments:[]}
} if(type==='CommentUpdated'){
    const{id,content,postId,status}=data
    const post =posts[postId]
    const comment=post.comments.find(comment=>{
        return comment.id===id
    })
    comment.status=status
    comment.content=content
    // console.log(comment.status=status)

}
if (type==='CommentCreatedEvent') {
        const{id,content,postId,status}=data
        const post=posts[postId]
        post.comments.push({id,content,status})
   
}
}

app.get('/posts',(req, res)=>{
    res.send(posts)
})
app.post('/events',(req, res)=>{
    const {type,data}=req.body
    handleEvents(type,data)
// console.log(posts)
res.send({})
})
app.listen(4002,async()=>{
    console.log('Listening on 4002 query')
    try{
    const res =await axios.get('http://localhost:4005/events')
    for(let event of res.data){
        console.log('Processing events',event.type)
        handleEvents(event.type,event.data)
    }
   } catch(error){
        console.log(error.message)
    }
    })

