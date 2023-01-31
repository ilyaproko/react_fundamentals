import { useState, useMemo, useEffect } from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModel";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./components/utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([ ...posts, newPost ]);
  }

  // получаем post из дочернего компонента
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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

      {
        postError && <h1>Произошла ошибка</h1>
      }
      {
        isPostsLoading
          ? <div style={{ display: "flex", justifyContent: "center", marginTop: 50}}>
              <Loader />
            </div>
          : <PostList remove={deletePost} posts={sortedAndSearchedPosts} title="title post 1" />
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />

    </div>

  );
}

export default App;
