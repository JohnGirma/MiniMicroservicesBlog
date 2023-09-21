const express = require('express')
const bodyParser =require('body-parser')
//generate a rondom no
const {randomBytes}=require('crypto')

const app =express()
app.use(bodyParser.json())

//save the data in memory(object)
const posts={}

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/posts',(req,res)=>{
    const id =randomBytes(4).toString('hex')
    const {title}=req.body
    posts[id]={
        id,title
    }
    res.status(201).send(posts.id)
})

app.listen(4000,()=>{
    console.log('Listening on 4000 post')
})