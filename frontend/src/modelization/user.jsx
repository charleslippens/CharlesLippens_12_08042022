export default class User {
	constructor(
		/**
		 * User informations
		 *
		 * @param { number } id
		 * @param { string } firstName
		 * @param { string } lastName
		 * @param { number } age
		 * @param { number } score
		 * @param { number } calorieCount
		 * @param { number } proteinCount
		 * @param { number } carbohydrateCount
		 * @param { number } lipidCount
		 */
		id,
		firstName,
		lastName,
		age,
		todayScore,
		calorieCount,
		proteinCount,
		carbohydrateCount,
		lipidCount
	) {
		this.userId = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.todayScore = todayScore;
		this.calorieCount = calorieCount;
		this.proteinCount = proteinCount;
		this.carbohydrateCount = carbohydrateCount;
		this.lipidCount = lipidCount;
	}
}
