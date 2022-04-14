import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../services/context.jsx";

import AsideCard from "../components/asidecard.jsx";

import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";

import "../styling/dashboard.css";

function Dashboard() {
	document.title = "dashboard";
	const { setUserId, user, setUser, setActivity, setAverageSessions, setPerformance } =
		useContext(Context);

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
