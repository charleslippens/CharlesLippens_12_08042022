import { LineChart, Line, XAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";
import "../styling/linechart.css";

/**
 *
 *
 * @param {*} { data }
 * @return {*}
 */
function LineChartAvgSessions({ data }) {
	const TranformDay = (tickItem) => {
		const Day = ["L", "M", "M", "J", "V", "S", "D"];
		if (tickItem) return Day[tickItem - 1];
	};
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip_goals">
					<p> {`${payload[0].value} `}min</p>
				</div>
			);
		}

		return null;
	};

	return (
		<>
			<div className="GoalsTitle">Durée moyenne des sessions</div>
			<LineChart width={260} height={260} data={data} className="averageSessions">
				<Line type="monotone" dataKey="sessionLength" stroke="#FFF" dot={false} />
				<XAxis
					dataKey="day"
					axisLine={false}
					tickLine={false}
					padding={{ top: 20 }}
					tickFormatter={TranformDay}
				/>
				<Tooltip
					content={<CustomTooltip />}
					cursor={{
						stroke: "black",
						strokeOpacity: 0.05,
						strokeWidth: 50,
					}}
				/>
			</LineChart>
		</>
	);
}
LineChartAvgSessions.propTypes = {
	data: PropTypes.array,
};

export default LineChartAvgSessions;
