import "../styling/sidebarbutton.css";
import propTypes from "prop-types";

function SidenavButton({ logo }) {
	return (
		<button className="sidebar-button">
			<img src={logo} alt="" className="sidebar-button-logo" />
		</button>
	);
}

SidenavButton.propTypes = {
	logo: propTypes.string.isRequired,
};

export default SidenavButton;
