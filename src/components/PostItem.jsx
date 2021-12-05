import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';

const PostItem = ({post, number, remove}) =>{
	const route = useNavigate()

	return (
		<div className="post">
			<div className="post__content">
				<strong>{number}. {post.title}</strong>
				<p>{post.body}</p>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => route(`/posts/${post.id}`)}>Open card</MyButton>
				<MyButton onClick={() => remove(post.id)}>Delete</MyButton>
			</div>
		</div>
	)
}

export default PostItem