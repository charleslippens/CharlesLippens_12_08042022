import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

export const ApiFetch = ({ children }) => {
	const [userId, setUserId] = useState(null);
	const [user, setUser] = useState(null);
	const [activity, setActivity] = useState(null);
	const [averageSessions, setAverageSessions] = useState(null);
	const [performance, setPerformance] = useState(null);

	useEffect(() => {
		if (userId) {
			// for mocked data
			//
			fetch(`../${userId}.json`).then((response) =>
				//fetch(`http://localhost:3000/user/${userId}`).then((response) =>
				response
					.json()
					.then(({ data }) => {
						setUser(data);
					})
					.catch((error) => console.log(error))
			);
			//for using mocked data
			fetch(`../${userId}/activity.json`).then((response) =>
				//fetch(`http://localhost:3000/user/${userId}/activity`).then((response) =>
				response
					.json()
					.then(({ data }) => {
						setActivity(data);
					})
					.catch((error) => console.log(error))
			);
			//for using mocked data
			fetch(`../${userId}/average-sessions.json`).then((response) =>
				//fetch(`http://localhost:3000/user/${userId}/average-sessions`).then((response) =>
				response
					.json()
					.then(({ data }) => {
						setAverageSessions(data);
					})
					.catch((error) => console.log(error))
			);
			//for using mocked data
			fetch(`../${userId}/performance.json`).then((response) =>
				//fetch(`http://localhost:3000/user/${userId}/performance`).then((response) =>
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
