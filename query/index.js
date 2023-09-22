const express = require('express')
const bodyParser =require('body-parser')
const cors = require('cors')
// const axios= require('axios')
//generate a rondom no
// const {randomBytes}=require('crypto')

const app =express()
app.use(bodyParser.json())

 
app.use(cors())

const posts={}
app.get('/posts',(req, res)=>{
    res.send(posts)
})
app.post('/events',(req, res)=>{
    const {type,data}=req.body
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
    console.log(comment.status=status)

}
if (type==='CommentCreatedEvent') {
        const{id,content,postId,status}=data
        const post=posts[postId]
        post.comments.push({id,content,status})
   
}
console.log(posts)
res.send({})
})
app.listen(4002,()=>{
    console.log('Listening on 4002 query')
})