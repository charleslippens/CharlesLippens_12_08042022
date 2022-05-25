import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/header.jsx";

import Profil from "../pages/profil.jsx";
import Sidenav from "../components/sidenav.jsx";
import Dashboard from "../pages/dashboard.jsx";

function Router() {
	const [userId, setUserId] = useState(12);

	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header userId={userId} setUserId={setUserId} />
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
