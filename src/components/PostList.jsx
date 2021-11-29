import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) =>{
	if(!posts.length){
		return(
			<h1 style={{textAlign: 'center'}}>Empty posts</h1>
		)
	}

	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{title}</h1>
			<TransitionGroup>
				{
					posts.map((post, i) =>
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames="post"
						>
							<PostItem post={post}  number={post.id} remove={remove}/>
						</CSSTransition>
					)
				}
			</TransitionGroup>
		</div>
	)
}

export default PostList;