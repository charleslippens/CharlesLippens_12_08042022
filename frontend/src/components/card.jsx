import "../styling/card.css";
import PropTypes from "prop-types";

function Card({ userKeyData, unit, subtitle, className, logo }) {
	return (
		<div className="card ">
			<div className={"card-icon-wrapper " + className}>
				<img src={logo} alt="" className="card-icon" />
			</div>
			<div className="card-data-wrapper">
				<p className="card-title">
					{userKeyData}
					{unit}
				</p>
				<p className="card-subtitle">{subtitle}</p>
			</div>
		</div>
	);
}

Card.propTypes = {
	logo: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	unit: PropTypes.string.isRequired,
	userKeyData: PropTypes.number,
};

export default Card;
