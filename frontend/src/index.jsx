import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { Provider } from "./services/context";
import Router from "./services/router.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider>
			<Router />
		</Provider>
	</React.StrictMode>
);
