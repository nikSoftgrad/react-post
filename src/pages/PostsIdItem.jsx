import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PostServices from "../API/PostServices";
import { useFetchPosts } from "../hooks/useFetchPosts";
import MyLoader from "../components/UI/loader/MyLoader";

const PostsIdItem = () => {
	const params = useParams()
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPost, isLoading, postError] = useFetchPosts( async () => {
		const response = await PostServices.getPost(params.id);
		setPost(response.data);
	})

	const [fetchPostComments, isLoadingComments, postCommentsError] = useFetchPosts( async () => {
		const response = await PostServices.getPostComments(params.id);
		setComments(response.data);
	})

	useEffect(() =>{
		fetchPost();
		fetchPostComments();
	},[])

	return (
		<div>
			<h1>Post id = {params.id}</h1>
			{
        isLoading
          ?
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <MyLoader/>
            </div>
          : <div>
							<div>{post.id}. {post.title}</div>
							<div>{post.body}</div>
						</div>
      }
			{
        isLoadingComments
          ?
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <MyLoader/>
            </div>
          : <div>
							<h1>Comments</h1>
							{
								comments.map(comment => <div key={comment.id} style={{marginBottom: '10px'}}>Comment: <strong>{comment.id}.</strong> {comment.body}</div>)
							}
						</div>
      }
		</div>
	)
}

export default PostsIdItem;