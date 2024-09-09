import React from "react";
import HomePage from "./containers/HomePage/HomePage";
import IndexPage from "./containers/IndexPage/IndexPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import { useAuth0 } from "@auth0/auth0-react";

function MovieApp() {
	const { isAuthenticated } = useAuth0();

	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={isAuthenticated ? <HomePage /> : <IndexPage />} />
					<Route path="/sign-in" element={<SignIn />} />
				</Routes>
			</div>
		</Router>
	);
}

export default MovieApp;