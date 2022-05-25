import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/header.jsx";

import Profil from "../pages/profil.jsx";
import Sidenav from "../components/sidenav.jsx";
import Dashboard from "../pages/dashboard.jsx";

function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Sidenav />
				<Routes>
					<Route exact path="/profil" element={<Profil />} />
					<Route path="/user/:userId" element={<Dashboard />} />
					<Route path="/" element={<Navigate to="/profil" replace />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
