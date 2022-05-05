import "../styling/cardcharts.css";
import PropTypes from "prop-types";

/**
 * Display a card for charts
 * @param  { object } content
 * @param  { string } classname
 * @returns { HtmlElements } cardcharts' component is displayed dynamically.
 */
function CardCharts({ className, content }) {
	return <div className={"charts-card " + className}>{content}</div>;
}
CardCharts.propTypes = {
	className: PropTypes.string.isRequired,
	content: PropTypes.object.isRequired,
};
export default CardCharts;
