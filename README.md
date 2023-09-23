# MiniMicroservicesBlog

A mini microservice blog project using 4 node js service nextjs frontend app



service
1, Post -[Create Post, List all Posts]

2, Comments -[Create a Comment ,List all Comments]

3,client

4, event-bus

5, moderation

6, query

setup 
frontend React app
backend post and comment service

# POST SERVICE
/post(post,{title:string})
/post{get}

# COMMENTS SERVICE 
/post/:id/comments{post,{content:string}}

/post/:id/comment{get}


1 problem -many request
solution 1,sync communcation 2, aysnc communcation (event Broker and add Query service)