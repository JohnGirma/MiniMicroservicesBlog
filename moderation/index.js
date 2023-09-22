const express = require('express')
const bodyParser =require('body-parser')
// const cors = require('cors')
const axios= require('axios')
//generate a rondom no
// const {randomBytes}=require('crypto')

const app =express()
app.use(bodyParser.json())

 

app.post('/events',async (req, res)=>{
    const {type,data}=req.body
    if (type==='CommentCreatedEvent') {
      const status =data.content.include('no') ?'rejected' :'approved'
      await axios.post('http://localhost:4005/events',{
        type:'CommentModerat',
        data:{
            id:data.id,
            postId:data.postId,
            status,
            content:data.content
        }
      })
    }      

// console.log(posts)
res.send({})
})
app.listen(4003,()=>{
    console.log('Listening on 4003 moderation')
})