import { NavLink, Link } from "react-router-dom";

import logo from "../assets/logo.svg";

import "../styling/header.css";

/**
 * Render the Header with a logo and a navbar
 * The user's profile page is determined by the SwitchUser state in the Context
 * @param
 * @returns { HtmlElements } Header
 */
function Header({ userId, setUserId }) {
	function userToggle() {
		userId === 12 ? setUserId(18) : setUserId(12);
	}
	return (
		<header className="nav-wrapper">
			<Link to={`/user/${userId}/`} onClick={userToggle}>
				<img src={logo} alt="SportSee Logo" className="nav-logo" />
			</Link>
			<nav className="nav vertical-center">
				<span className="nav-link">Accueil</span>
				<span className="nav-link">
					<NavLink
						className={({ isActive }) => (isActive ? "nav-active" : "nav-link")}
						to={`/user/${userId}/`}
						onClick={userToggle}
					>
						Profil
					</NavLink>
				</span>
				<span className="nav-link">Réglage</span>
				<span className="nav-link">Communauté</span>
			</nav>
		</header>
	);
}

export default Header;
