import axios from "axios"

export default class PostServices {
	static async getAll(limit, page){
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: page,
			}
		});
		return response;
	}
	static async getPost(id){
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		return response;
	}
	static async getPostComments(id){
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
		return response;
	}
}