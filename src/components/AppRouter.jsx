import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostsIdItem from '../pages/PostsIdItem';

function AppRouter() {

  return (
		<Routes>
			<Route exact path="/about" element={<About />}/>
			<Route exact path="/posts" element={<Posts />}/>
			<Route exact path="/posts/:id" element={<PostsIdItem />}/>
			<Route
        path="/"
        element={<Navigate to="/posts" />}
			/>
			<Route path="*" element={<Error />}/>
		</Routes>
  );
}

export default AppRouter;
