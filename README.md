# MiniMicroservicesBlog

service
1, Post -[Create Post, List all Posts]

2, Comments -[Create a Comment ,List all Comments]

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