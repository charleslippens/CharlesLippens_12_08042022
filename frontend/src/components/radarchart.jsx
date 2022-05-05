import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import PropTypes from "prop-types";

/**
 * Render a RadarChart
 * @param {object} data
 * @returns { HtmlElements } RadarChart
 */
function RadarChartPerf({ data }) {
	const TranformKind = (tickItem) => {
		const Kind = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
		if (tickItem) return Kind[tickItem - 1];
	};
	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius={90} data={[...data.data].reverse()}>
					<PolarGrid
						radialLines={false}
						gridType="polygon"
						polarRadius={[10, 23, 40, 60]}
						stroke="#fff"
					/>
					<PolarAngleAxis
						dataKey="kind"
						tickLine={false}
						tickFormatter={TranformKind}
						tick={{ fontSize: 12, fontWeight: 500 }}
						stroke="white"
						dy={4}
						radius="100"
					/>
					<Radar
						name="Performance"
						dataKey="value"
						stroke="#FF0101"
						fill="#e60000"
						fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</>
	);
}
RadarChartPerf.propTypes = {
	data: PropTypes.object.isRequired,
};
export default RadarChartPerf;
