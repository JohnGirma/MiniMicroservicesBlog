const express = require('express')
const bodyParser =require('body-parser')
const cors = require('cors')
const axios= require('axios')
//generate a rondom no
const {randomBytes}=require('crypto')

const app =express()
app.use(bodyParser.json())

 
app.use(cors())

//save the data in memory(object)
const posts={}

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/posts', async (req,res)=>{
    const id =randomBytes(4).toString('hex')
    const {title}=req.body
    posts[id]={
        id,title
    }
    await axios.post('http://localhost:4005/events',{
        type:'PostCreatedEvent',
        data:{
            id,title
        }
    })

    res.status(201).send(posts.id)
})
app.post('/events',(req,res)=>{
    console.log('Event Reviced',req.body.type)
    res.send({})
})

app.listen(4000,()=>{
    console.log('v2')

    console.log('Listening on 4000 post')
})