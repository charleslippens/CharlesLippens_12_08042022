import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [userId, setUserId] = useState(null);
	const [user, setUser] = useState(null);
	const [activity, setActivity] = useState(null);
	const [averageSessions, setAverageSessions] = useState(null);
	const [performance, setPerformance] = useState(null);

	useEffect(() => {
		if (userId) {
			fetch("../user/" + userId + ".json").then((response) =>
				response
					.json()
					.then(({ data }) => {
						setUser(data);
					})
					.catch((error) => console.log(error))
			);
			fetch("../user/" + userId + "/activity.json").then((response) =>
				response
					.json()
					.then(({ data }) => {
						setActivity(data);
					})
					.catch((error) => console.log(error))
			);
			fetch("../user/" + userId + "/average-sessions.json").then((response) =>
				response
					.json()
					.then(({ data }) => {
						setAverageSessions(data);
					})
					.catch((error) => console.log(error))
			);
			fetch("../user/" + userId + "/performance.json").then((response) =>
				response
					.json()
					.then(({ data }) => {
						setPerformance(data);
					})
					.catch((error) => console.log(error))
			);
		}
	}, [userId]);

	return (
		<Context.Provider
			value={{
				userId,
				setUserId,
				user,
				setUser,
				activity,
				setActivity,
				averageSessions,
				setAverageSessions,
				performance,
				setPerformance,
			}}
		>
			{children}
		</Context.Provider>
	);
};
