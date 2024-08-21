class Taxi {
	constructor(model, medallion) {
		this.model = model;
		this.medallion = medallion;
		this.miles = 0;
	}
	trip(miles) {
		this.miles = this.miles + miles;
	}
}

export function createFleet(fleetSize = 5, medallion = 0) {
	let fleet = [];
	for (let i = 0; i < fleetSize; i++) {
		let taxi = new Taxi("Webville Motors", medallion);
		fleet.push(taxi);
		medallion++;
	}
	return fleet;
}

export let taxiCompany = "Webville Motors";
