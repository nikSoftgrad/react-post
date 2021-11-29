import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const addNewPost = (e) => {
    e.preventDefault();

    create({...post, id: Date.now()});
    setPost({title: '', body: ''})
  }

	return (
		<form >
			<MyInput
				type="text"
				value={post.title}
				placeholder="Title new post"
				onChange={(e) => setPost({...post, title: e.target.value})}
			/>
			<MyInput
				type="text"
				value={post.body}
				placeholder="Body new post"
				onChange={(e) => setPost({...post, body: e.target.value})}
			/>
			<MyButton onClick={addNewPost}>Add</MyButton>
		</form>
	)
}

export default PostForm;