import "../styling/sidenav.css";

import yoga from "../assets/yoga.svg";
import swimming from "../assets/swimming.svg";
import biking from "../assets/biking.svg";
import haltere from "../assets/haltere.svg";

import SidenavButton from "./sidenavbutton.jsx";

/**
 * Render the sidebar with buttons and copyright
 * @param
 * @returns { HtmlElements } Sidenav
 */
function Sidenav() {
	return (
		<aside className="sidebar">
			<div className="sidebar-button-wrapper">
				<SidenavButton logo={yoga} />
				<SidenavButton logo={swimming} />
				<SidenavButton logo={biking} />
				<SidenavButton logo={haltere} />
			</div>
			<p className="copyright">Copyright, SportSee 2020</p>
		</aside>
	);
}

export default Sidenav;
