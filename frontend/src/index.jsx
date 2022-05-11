import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { ApiFetch } from "./services/getData.jsx";
import Router from "./services/router.jsx";

ReactDOM.render(
	<ApiFetch>
		<Router />
	</ApiFetch>,
	document.getElementById("root")
);
