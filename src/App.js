import React, {useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './App.css';
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'yu' , body: 'i'},
    {id: 2, title: 'jaas2' , body: 'yt'},
    {id: 3, title: 'a' , body: 'q'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() =>{
    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  },[filter.sort, posts])

  const searchAndSortPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [sortedPosts, filter.query])

  const createPost = (post) => {
    setPosts([...posts, {...post}]);
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '10px 0'}} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {
        searchAndSortPosts.length
          ? <PostList remove={removePost} title="List posts" posts={searchAndSortPosts}/>
          : <h1 style={{textAlign: 'center'}}>Empty posts</h1>
      }
    </div>
  );
}

export default App;
