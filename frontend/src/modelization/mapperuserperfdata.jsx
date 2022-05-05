import UserPerformanceData from "./userperfdata.jsx";

export default class UserPerformanceMapper {
	/**
	 * Convert received Json to new UserPerformance type
	 *
	 * @param { object } json
	 * @returns { new UserPerformanceData }
	 */
	static convertToUserPerf(json) {
		return new UserPerformanceData(json.userId, json.data, json.kind);
	}
}
