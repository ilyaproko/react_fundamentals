import { useState } from "react";
import Counter from "./components/Counter";
import { ClassCounter } from "./components/ClassCounter";
import PostItem from "./components/Postitem";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Descripti"},
    {id: 2, title: "JavaScript 2", body: "Descripti"},
    {id: 3, title: "JavaScript 3", body: "Descripti"},
    {id: 4, title: "JavaScript 4", body: "Descripti"},
  ])

  return (
    <div className="App">
      
      <form action="">
        <input type="text" placeholder="post's name"/>
        <input type="text" placeholder="post's description"/>
        <MyButton disabled>Create post</MyButton>
        <PostList posts={posts} title="title post 1" />
      </form>

    </div>

  );
}

export default App;
