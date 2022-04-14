import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header.jsx";

import Home from "../pages/home.jsx";
import Sidenav from "../components/sidenav.jsx";
import Dashboard from "../pages/dashboard.jsx";

function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Sidenav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/user/:userId" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
