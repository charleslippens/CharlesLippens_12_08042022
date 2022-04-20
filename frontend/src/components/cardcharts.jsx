import "../styling/cardcharts.css";
import PropTypes from "prop-types";

/**
 *
 *
 * @param {*} { className, content }
 * @return {*}
 */
function CardCharts({ className, content }) {
	return <div className={"charts-card " + className}>{content}</div>;
}
CardCharts.propTypes = {
	className: PropTypes.string,
	content: PropTypes.object,
};
export default CardCharts;
