import { ResponsiveContainer, XAxis, Tooltip, BarChart, CartesianGrid, YAxis, Bar } from "recharts";
import PropTypes from "prop-types";
import "../styling/barchart.css";

/**
 * desc
 * @date 2022-04-20
 * @param { data } parm1
 * @return
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
	 */
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					{`${payload[0].value} Kg`}
					{`${payload[1].value} kCal`}
				</div>
			);
		}
		return null;
	};
	return (
		<>
			<div className="ActvityTitle">Activité quotidienne</div>
			<div className="ActvityCircles">
				<div className="ActvityCircle">
					<div className="Actvity-circle_black"></div>
					<p>Poids (kg)</p>
				</div>
				<div className="ActvityCircle">
					<div className=" Actvity-circle_red"></div>
					<p>Calories brûlées (kCal)</p>
				</div>
			</div>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart data={data} barSize={7} barCategoryGap="35%" barGap={2}>
					<CartesianGrid strokeDasharray="2 2" vertical={false} />
					<XAxis dataKey="day" tickFormatter={TranformDate} />
					<YAxis
						yAxisId="kilogram"
						dataKey="kilogram"
						orientation="right"
						domain={["dataMin -3", "auto"]}
						axisLine={false}
						tickLine={false}
						tickCount="3"
						type="number"
					/>
					<YAxis
						yAxisId="calories"
						tick={false}
						orientation="left"
						axisLine={false}
						tickLine={false}
						domain={[0, "auto"]}
					/>

					<Tooltip content={<CustomTooltip />} />
					<Bar
						yAxisId="kilogram"
						name="kg"
						dataKey="kilogram"
						fill="#282D30"
						radius={[50, 50, 0, 0]}
						barSize={8}
					/>
					<Bar
						yAxisId="calories"
						name="kCal"
						dataKey="calories"
						fill="#E60000"
						radius={[50, 50, 0, 0]}
						barSize={8}
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	);
}

BarChartActivity.propTypes = {
	data: PropTypes.array,
};
export default BarChartActivity;
