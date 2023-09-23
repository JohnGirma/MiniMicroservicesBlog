const express = require('express')
const bodyParser =require('body-parser')
const axios= require('axios')
var cors = require('cors')
//generate a rondom no
const {randomBytes}=require('crypto')

const app =express()
app.use(bodyParser.json())
app.use(cors())
//save the data in memory(object)
const commentByPostId={}

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments',async(req,res)=>{
    const commentId =randomBytes(4).toString('hex')
    const {content}=req.body
    const comments=commentByPostId[req.params.id] || []
    comments.push({id:commentId,content,status:"pending"})
    commentByPostId[req.params.id]=comments
    await axios.post('http://localhost:4005/events',{
        type:'CommentCreatedEvent',
        data:{
            id:commentId,
            content,
            postId:req.params.id,
            status:'pending'
        }
    })

    res.status(201).send(comments)
})
app.post('/events',async (req,res)=>{
    console.log('Event Reviced',req.body.type)
    const{type,data}=req.body
    if (type==='CommentModerat') {
        const{id,content,postId,status}=data
        const comments=commentByPostId[postId]
        const comment=comments.find(comment=>{
            return comment.id===id
        })
        comment.status=status
        await axios.post('http://localhost:4005/events',{
        type:'CommentUpdated',
        data:{
            id,
            postId,
            status,
            content
        }
      })
    }
    res.send({})
})

app.listen(4001,()=>{
    console.log('Listening on 4001 comments')
})