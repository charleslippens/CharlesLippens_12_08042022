import React, { useState, createContext, useEffect } from "react";
import UserMapper from "../modelization/mapperuser.jsx";
import UserSessionMapper from "../modelization/mappersessionsdata.jsx";
import UserPerformanceMapper from "../modelization/mapperuserperfdata.jsx";
import UserActivitiesMapper from "../modelization/mapperuseractdata.jsx";

import PropTypes from "prop-types";

export const Context = createContext();
/**
 * Provider of the data for the app using context, state and fetch
 * @param {object} children
 * @returns { HtmlElements} returning the Context.Provider with the value of the state and the setState functions
 */
export const ApiFetch = ({ children }) => {
	const [userSwitch, setUserSwitch] = useState(false);
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
						setUser(UserMapper.convertToUser(data));
						console.log(data);
					})
					.catch((error) => console.log(error))
			);
			//for using mocked data
			fetch(`../${userId}/activity.json`).then((response) =>
				//fetch(`http://localhost:3000/user/${userId}/activity`).then((response) =>
				response
					.json()
					.then(({ data }) => {
						setActivity(UserActivitiesMapper.convertToActivities(data));
					})
					.catch((error) => console.log(error))
			);
			//for using mocked data
			fetch(`../${userId}/average-sessions.json`).then((response) =>
				//fetch(`http://localhost:3000/user/${userId}/average-sessions`).then((response) =>
				response
					.json()
					.then(({ data }) => {
						setAverageSessions(UserSessionMapper.convertToSession(data));
					})
					.catch((error) => console.log(error))
			);
			//for using mocked data
			fetch(`../${userId}/performance.json`).then((response) =>
				//fetch(`http://localhost:3000/user/${userId}/performance`).then((response) =>
				response
					.json()
					.then(({ data }) => {
						setPerformance(UserPerformanceMapper.convertToUserPerf(data));
					})
					.catch((error) => console.log(error))
			);
		}
	}, [userId]);

	return (
		<Context.Provider
			value={{
				userSwitch,
				setUserSwitch,
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

ApiFetch.propTypes = {
	children: PropTypes.object.isRequired,
};
