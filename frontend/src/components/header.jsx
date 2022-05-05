import { NavLink, Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import { Context } from "../services/getData.jsx";
import { useContext } from "react";

import "../styling/header.css";

/**
 * Render the Header with a logo and a navbar
 * The user's profile page is determined by the SwitchUser state in the Context
 * @param
 * @returns { HtmlElements } Header
 */
function Header() {
	const { userSwitch } = useContext(Context);
	const userId = userSwitch ? 18 : 12;
	return (
		<header className="nav-wrapper">
			<Link to="/">
				<img src={logo} alt="SportSee Logo" className="nav-logo" />
			</Link>
			<nav className="nav vertical-center">
				<NavLink
					className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
					to={`/user/${userId}/`}
				>
					Profil
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
					to="/settings"
				>
					Réglage
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
					to="/community"
				>
					Communauté
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
