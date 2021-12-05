import React, {useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostServices from "../API/PostServices";
import { useFetchPosts } from "../hooks/useFetchPosts";
import MyLoader from "../components/UI/loader/MyLoader";
import { getPagination, getTotalPages } from "../utils/PostServices";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modalActive, setModalActive] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const searchAndSortPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetchPosts( async () => {
    const response = await PostServices.getAll(limit, page);
    const totalPosts = response.headers['x-total-count']
    setPosts(response.data);
    setTotalPages(getTotalPages(totalPosts, limit))
  })

  const paginationPosts = getPagination(totalPages);

  useEffect(() =>{
    fetchPosts();
  },[page])

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
      <div className="pagination__wrapper">
        {
          paginationPosts.map(p =>
            <span
              key={p}
              className={p === page ? 'pagination current' : 'pagination'}
              onClick={() => setPage(p)}
            >{p}</span>
          )
        }
      </div>
    </div>
  );
}

export default Posts;
