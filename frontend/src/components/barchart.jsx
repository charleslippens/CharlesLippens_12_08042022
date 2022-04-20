import { XAxis, Tooltip, BarChart, CartesianGrid, YAxis, Bar } from "recharts";
import PropTypes from "prop-types";
import "../styling/barchart.css";
import styled from "styled-components";

const ToolTipLabel = styled.div`
	background: red;
	color: white;
	font-size: 0.438rem;
	font-weight: 500;
	margin: 0.313rem;
	padding: 0.313rem;
`;
/**
 * desc
 * @date 2022-04-20
 * @param { data } parm1
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
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<ToolTipLabel>
					<p>{`${payload[0].value} kCal`}</p>
					<p>{`${payload[1].value} Kg`}</p>
				</ToolTipLabel>
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
			<BarChart
				width={835}
				height={320}
				data={data}
				barSize={7}
				barCategoryGap="35%"
				barGap={2}
			>
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

				<Tooltip
					content={<CustomTooltip />}
					position={{ y: 40 }}
					cursor={{
						fill: "#C4C4C4",
					}}
				/>
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
		</>
	);
}

BarChartActivity.propTypes = {
	data: PropTypes.array,
};
export default BarChartActivity;
