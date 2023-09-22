import PostCreate from './PostCreate'
import PostList from './PostList'
export default function Home() {
  return (
    <div >
      <h1>Blog Post</h1>
      <PostCreate/>
      <hr />
     <h2>Posts</h2>
     <PostList/>
      </div>
  )
}
