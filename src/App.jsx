import { useState, useRef } from "react";
import Counter from "./components/Counter";
import { ClassCounter } from "./components/ClassCounter";
import PostItem from "./components/Postitem";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "Descripti"},
    {id: 2, title: "JavaScript 2", body: "Descripti"},
    {id: 3, title: "JavaScript 3", body: "Descripti"},
    {id: 4, title: "JavaScript 4", body: "Descripti"},
  ])

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);
  }

  return (
    <div className="App">
      

      <PostForm create={createPost} />

      <hr style={{ margin: "15px" }} />

      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: "title", name: "По названию"},
            {value: "body", name: "По содержанию"},
          ]}
          />
      </div>

      {
        posts.length !== 0
          ? <PostList remove={deletePost} posts={posts} title="title post 1" />
          : <h1 style={{textAlign: "center"}}>Posts aren't defined in lists</h1>
      }

      

    </div>

  );
}

export default App;
