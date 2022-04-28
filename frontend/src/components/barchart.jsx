import {
	Legend,
	ResponsiveContainer,
	XAxis,
	Tooltip,
	BarChart,
	CartesianGrid,
	YAxis,
	Bar,
} from "recharts";
import PropTypes from "prop-types";
import "../styling/barchart.css";

/**
 * Display a Bar Chart with activity's datas from the API.
 * @return { HtmlElements } BarChart's component is displayed dynamically.
 * @param { Array } data
 */
function BarChartActivity({ data }) {
	const TranformDate = (tickItem) => {
		let formattedDate = "";

		if (tickItem) {
			let parts = tickItem.split("-");
			formattedDate = `${parts[2].replace(/^0+/, "")}`;
		}
		return formattedDate;
	};
	/**
	 * It customs tooltip from this line chart.
	 * @return { HtmlElements } CustomTooltip's component is displayed.
	 * @param  { active } bool
	 * @param  { payload } array
	 */
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p>{payload[0].value + "kg"}</p>
					<p>{payload[1].value + "Kcal"}</p>
				</div>
			);
		}
		return null;
	};
	return (
		<>
			<h3 className="ActvityTitle">Activité quotidienne</h3>

			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data} barSize={7} barGap={8}>
					<CartesianGrid strokeDasharray="3" vertical={false} />
					<XAxis
						dataKey="day"
						tickFormatter={TranformDate}
						tickLine={false}
						strokeDasharray="3"
						vertical={false}
						strokeWidth={2}
						tickMargin={16}
						tick={{ fill: "#9B9EAC" }}
						stroke="#DEDEDE"
					/>
					<YAxis
						yAxisId="kilogram"
						dataKey="kilogram"
						orientation="right"
						domain={["dataMin-2", "dataMax+1"]}
						axisLine={false}
						tickLine={false}
						tickCount={3}
						tickMargin={30}
					/>
					<YAxis hide yAxisId="calories" />

					<Tooltip content={<CustomTooltip />} />
					<Bar
						yAxisId="kilogram"
						name="Poids (kg)"
						dataKey="kilogram"
						fill="#282D30"
						radius={[3, 3, 0, 0]}
					/>
					<Bar
						yAxisId="calories"
						name="Calories brûlées (kCal)"
						dataKey="calories"
						fill="#E60000"
						radius={[3, 3, 0, 0]}
					/>
					<Legend
						verticalAlign="top"
						align="right"
						iconType="circle"
						iconSize="10"
						height={80}
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	);
}

BarChartActivity.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default BarChartActivity;
