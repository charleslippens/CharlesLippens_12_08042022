export default class UserPerformanceData {
	/**
	 * User Performances
	 *
	 * @param { number } id
	 * @param { array } data
	 * @param {array} kind
	 */
	constructor(id, data, kind) {
		this.userId = id;
		this.data = data;
		this.kind = kind;
	}
}
