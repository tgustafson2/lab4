import { useState } from 'react'
import { createPost } from "./components/AddPost"
import AddPost from "./components/AddPost";
import Post from "./components/Post"

function App() {
  const [posts, modPosts] = useState([]); 
  const maxDepth = 3;

  const addPost = ( p ) => {
    const np = createPost(p.usrName, p.text);
    modPosts([np, ...posts]);
  };

  return (
    <div className="App">
      <AddPost title='New Post' onAdd={addPost}/>
      <div className="Posts">
        {posts.map((p, index)=>
          <Post 
          post={p}
          depth={maxDepth}
          key={index}
          />
        )}
      </div>
    </div>
  );
}

export default App;
