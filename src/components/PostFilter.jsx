import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
			<MyInput
				type="text"
				placeholder="Find post"
				value={filter.query}
				onChange={(e) => setFilter({...filter, query: e.target.value})}
			/>
			<MySelect
				value={filter.sort}
				defaultValue="Sort"
				options={[
					{value: 'title', body: 'Sorted by title'},
					{value: 'body', body: 'Sorted by body'},
				]}
				onChange={(sort) => setFilter({...filter, sort: sort})}
			/>
		</div>
	)
}

export default PostFilter;