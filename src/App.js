import React, {useEffect, useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './App.css';
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostServices from "./API/PostServices";
import { useFetchPosts } from "./hooks/useFetchPosts";
import MyLoader from "./components/UI/loader/MyLoader";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modalActive, setModalActive] = useState(false);
  const searchAndSortPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetchPosts( async () => {
    const posts = await PostServices.getAll();
    setPosts(posts);
  })

  useEffect(() =>{
    fetchPosts();
  },[])

  const createPost = (post) => {
    setPosts([...posts, {...post}]);
    setModalActive(false)
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModalActive(true)}>Add new post</MyButton>
      <MyModal active={modalActive} setActive={setModalActive}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '10px 0'}} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1>{postError}</h1>
        </div>
      }
      {
        isPostsLoading
          ?
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <MyLoader/>
            </div>
          : <PostList remove={removePost} title="List posts" posts={searchAndSortPosts}/>
      }
    </div>
  );
}

export default App;
