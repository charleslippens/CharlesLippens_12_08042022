import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { ApiFetch } from "./services/getData.jsx";
import Router from "./services/router.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApiFetch>
			<Router />
		</ApiFetch>
	</React.StrictMode>
);
