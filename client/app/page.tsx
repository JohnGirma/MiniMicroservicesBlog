import PostCreate from './PostCreate'
import PostList from './PostList'
export default function Home() {
  return (
    <div className="flex justify-center content-center items-center justify-self-center my-8 flex-col">
      <div>
      <h1>Blog Post</h1>
      <PostCreate/>
      </div>
      <hr />
      <div className="">
     <h2>Posts</h2>
     <PostList/>
      </div>
      </div>
  )
}
