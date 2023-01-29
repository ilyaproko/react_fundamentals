import { useState, useMemo } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModel";
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "erj", body: "Descripti"},
    {id: 2, title: "aa 2", body: "Descripti"},
    {id: 3, title: "ffd 3", body: "Descripti"},
    {id: 4, title: "kmn 4", body: "Descripti"},
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log("отработала функция сортед постс");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;

  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.includes(filter.query));
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ]);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setModal={setModal} />
      </MyModal>


      <hr style={{ margin: "15px" }} />

      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />

      <PostList remove={deletePost} posts={sortedAndSearchedPosts} title="title post 1" />

      

    </div>

  );
}

export default App;
