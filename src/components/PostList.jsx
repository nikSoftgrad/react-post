import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) =>{

	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{title}</h1>
			{
				posts.map((post, i) =>
					<PostItem post={post} key={post.id} number={i + 1} remove={remove}/>
				)
			}
		</div>
	)
}

export default PostList;