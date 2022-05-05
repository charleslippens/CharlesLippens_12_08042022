import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header.jsx";

import Profil from "../pages/profil.jsx";
import Sidenav from "../components/sidenav.jsx";
import Dashboard from "../pages/dashboard.jsx";
/**
 * Router to render the Header, the Sidebar and the 4 pages of the application
 * @param
 * @returns { HtmlElements} Router
 */
function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Sidenav />
				<Routes>
					<Route exact path="/" element={<Profil />} />
					<Route exact path="/user/:userId/" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
