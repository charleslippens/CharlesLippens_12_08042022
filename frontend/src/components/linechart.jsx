import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";
import "../styling/linechart.css";

function GreyArea({ cx, cy }) {
	return (
		<svg>
			<rect x={cx} y={0} width="100%" height="100%" fill="#00000030" rx="5" ry="5" />
			<circle cx={cx} cy={cy} r="9" fill="#FFFFFF50" />
			<circle cx={cx} cy={cy} r="4" fill="#FFFFFF" />
		</svg>
	);
}

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
			<div className="GoalsTitle">
				Durée moyenne
				<br /> des sessions
			</div>
			<ResponsiveContainer width="90%" height="70%">
				<LineChart data={data} className="averageSessions">
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="url(#colorUv)"
						dot={false}
						strokeWidth={2}
						activeDot={GreyArea}
					/>
					<XAxis
						tick={{
							fill: "rgba(255,255,255,0.6)",
							fontSize: "0.75rem",
						}}
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tickMargin={20}
						tickFormatter={TranformDay}
						scale="band"
						interval="preserveStartEnd"
					/>
					<YAxis type="number" domain={["dataMin-20", "dataMax+45"]} hide={true} />
					<defs>
						<linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
							<stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
							<stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
							<stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
							<stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
							<stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
						</linearGradient>
					</defs>
					<Tooltip
						content={<CustomTooltip />}
						cursor={{
							stroke: "black",
							strokeOpacity: 0.05,
							strokeWidth: 50,
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}
LineChartAvgSessions.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LineChartAvgSessions;
