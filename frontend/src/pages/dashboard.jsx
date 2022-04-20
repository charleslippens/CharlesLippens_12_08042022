import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../services/getData.jsx";

import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";

import AsideCard from "../components/asidecard.jsx";
import CardCharts from "../components/cardcharts.jsx";

import BarChartActivity from "../components/barchart.jsx";
import RadialChart from "../components/radialchart.jsx";
import LineChartAvgSessions from "../components/linechart.jsx";
import RadarChartPerf from "../components/radarchart.jsx";

import "../styling/dashboard.css";

/**
 *
 *
 * @return {*}
 */
function Dashboard() {
	document.title = "dashboard";
	const {
		setUserId,
		user,
		setUser,
		activity,
		setActivity,
		averageSessions,
		setAverageSessions,
		performance,
		setPerformance,
	} = useContext(Context);

	const { userId } = useParams();

	useEffect(() => {
		if (userId) {
			setUserId(userId);
		}
		return () => {
			setUserId(null);
			setUser(null);
			setActivity(null);
			setAverageSessions(null);
			setPerformance(null);
		};
	}, [userId, setUserId, setUser, setActivity, setAverageSessions, setPerformance]);

	return (
		<section className="profil">
			{user && (
				<div>
					<h2 className="dashboard-title">
						Bonjour{" "}
						<span className="dashboard-firstName">{user.userInfos.firstName}</span>
					</h2>
					<p className="dashboard-subtitle">
						Félicitation ! Vous avez explosé vos objectifs hier 👏
					</p>
					<div className="dashboard">
						<div className="dashboard-charts-wrapper">
							<div className="dashboard-charts">
								{activity && <BarChartActivity data={activity.sessions} />}
							</div>
							<div className="small-card-wrapper">
								{averageSessions && (
									<CardCharts
										className="average-sessions"
										content={
											<LineChartAvgSessions data={averageSessions.sessions} />
										}
									/>
								)}
								{performance && (
									<CardCharts
										className="performance"
										content={<RadarChartPerf data={performance} />}
									/>
								)}
								{user && (
									<CardCharts
										className="score"
										content={<RadialChart data={user} />}
									/>
								)}
							</div>
						</div>
						<div className="dashboard-aside">
							<AsideCard
								userKeyData={user.keyData.calorieCount}
								unit="kCal"
								subtitle="Calories"
								className="calorie"
								logo={energy}
							/>
							<AsideCard
								userKeyData={user.keyData.proteinCount}
								unit="g"
								subtitle="Proteines"
								className="protein"
								logo={chicken}
							/>
							<AsideCard
								userKeyData={user.keyData.carbohydrateCount}
								unit="g"
								subtitle="Glucides"
								className="carbohydrate"
								logo={apple}
							/>
							<AsideCard
								userKeyData={user.keyData.lipidCount}
								unit="g"
								subtitle="Lipides"
								className="lipid"
								logo={cheeseburger}
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default Dashboard;
