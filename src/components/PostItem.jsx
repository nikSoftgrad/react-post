import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = ({post, number, remove}) =>{

	return (
		<div className="post">
			<div className="post__content">
				<strong>{number}. {post.title}</strong>
				<p>{post.body}</p>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => remove(post.id)}>Delete</MyButton>
			</div>
		</div>
	)
}

export default PostItem