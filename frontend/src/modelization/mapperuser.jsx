import User from "./user.jsx";

export default class UserMapper {
	/**
	 * Convert received Json to new User type
	 * @param { object } json
	 * @returns { new User }
	 */
	static convertToUser(json) {
		return new User(
			json.id,
			json.userInfos.firstName,
			json.userInfos.lastName,
			json.userInfos.age,
			json.todayScore,
			json.keyData.calorieCount,
			json.keyData.proteinCount,
			json.keyData.carbohydrateCount,
			json.keyData.lipidCount
		);
	}
}
