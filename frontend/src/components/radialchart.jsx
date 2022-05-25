import { ResponsiveContainer, PolarAngleAxis, RadialBarChart, RadialBar } from "recharts";
import PropTypes from "prop-types";
import "../styling/radialchart.css";

/**
 * Render a Radial Bar Chart using Recharts
 * @param {object} data
 * @returns { HtmlElements } RadialChart
 */
function RadialChart({ data }) {
	let score = 0;
	if (data.todayScore) {
		score = data.todayScore;
	}
	const dataArray = [{ name: "score", value: score }];

	return (
		<>
			<div className="ScoreTitle">Score</div>
			<ResponsiveContainer width="90%" height="70%">
				<RadialBarChart
					innerRadius="0%"
					outerRadius="0%"
					data={dataArray}
					startAngle={90}
					endAngle={450}
				>
					<PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
					<RadialBar
						data={[{ value: 1 }]}
						dataKey="value"
						barSize={170}
						fill="#FFF"
						isAnimationActive={false}
					/>
					<RadialBar dataKey="value" barSize={10} cornerRadius={100} fill="#FF0000" />
				</RadialBarChart>
			</ResponsiveContainer>
			<div className="chartgoal-label">
				<p className="percent">{data.todayScore && data.todayScore * 100}%</p>
				<p>de votre</p>
				<p>objectif</p>
			</div>
		</>
	);
}
RadialChart.propTypes = {
	data: PropTypes.object.isRequired,
};
export default RadialChart;
