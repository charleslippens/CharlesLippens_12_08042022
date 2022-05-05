import "../styling/card.css";
import PropTypes from "prop-types";
/**
 * Display a card with various sports performance informations.
 * @param { number} userKeyData
 * @param { string} unit
 * @param {string } subtitle
 * @param {string } classname
 * @param { string } logo
 * @returns { HtmlElements } AsideBar's component is displayed dynamically.
 */
function AsideCard({ userKeyData, unit, subtitle, className, logo }) {
	return (
		<div className="asidecard ">
			<div className={"asidecard-icon-wrapper " + className}>
				<img src={logo} alt="" className="asidecard-icon" />
			</div>
			<div className="asidecard-data-wrapper">
				<p className="asidecard-title">
					{userKeyData}
					{unit}
				</p>
				<p className="asidecard-subtitle">{subtitle}</p>
			</div>
		</div>
	);
}

AsideCard.propTypes = {
	logo: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	unit: PropTypes.string.isRequired,
	userKeyData: PropTypes.number.isRequired,
};

export default AsideCard;
