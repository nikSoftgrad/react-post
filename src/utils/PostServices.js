export const getTotalPages = (totalPosts, limit) => {
	return Math.ceil(totalPosts / limit);
}

export const getPagination = (totalPages) => {
	const arr = [];

	for(let i = 0; i < totalPages; i++ ){
		arr.push(i + 1);
	}

	return arr;
}