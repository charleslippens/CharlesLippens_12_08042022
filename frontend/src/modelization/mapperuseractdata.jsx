import UserActivitiesData from "./useractdata.jsx";

export default class UserActivitiesMapper {
	/**
	 * Convert received Json to new UserActivitiesData type
	 *
	 * @param { object } json
	 * @returns { new UserActivitiesData }
	 */
	static convertToActivities(json) {
		return new UserActivitiesData(json.userId, json.sessions);
	}
}
