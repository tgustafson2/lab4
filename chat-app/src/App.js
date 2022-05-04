import AddPost from "./components/AddPost";
import Post from "./components/Post"

function App() {
  const post = [
    {
      usrName: "cameron",
      text: "Hey guys I hope you like this assignment, it's pretty cool!",
    },
    {
      usrName: "student",
      text: "@cameron I don't think it's that cool, and you're wasting a lot of my time :/"
    }
  ];

  const addPost = () => {
    console.log("AddPost -> Here!");
  };

  return (
    <div className="App">
      <AddPost title='New Post' onAdd={addPost}/>
      <div className="Posts">
        <Post 
          usrname={post[0].usrName} 
          text={post[0].text}
          postID={1} depth={1}/>
        <Post 
          usrname={post[1].usrName}
          text={post[1].text}
          postID={2} depth={1}/>
      </div>
    </div>
  );
}

export default App;
