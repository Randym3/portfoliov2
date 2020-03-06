export default class Project {
	constructor() {}
	async getProjects() {
		try {
			const res = await fetch("../data.json");
			const data = await res.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	}
}
