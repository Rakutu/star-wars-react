
export default class SwapiService {
  	#apiBase = 'https://swapi.dev/api';

  	async getResource(url) {
    	const res = await fetch(`${this.#apiBase}${url}`);

    	if (!res.ok) {
      		throw new Error (`Could not fetch ${url}, recieved ${res.status}`);
    	}	

    	return await res.json();
  	}

	async getAllPeople() {
		const res = await this.getResource('/people/');
		return res.results.map(this.#transformPerson);
	}

	async getPerson(id) {
		const person = await this.getResource(`/people/${id}`);
		return this.#transformPerson(person);
	}

	async getAllPlanets() {
		const res = await this.getResource('/planets/');
		return res.results.map(this.#transformPlanet);
	}

	async getPlanet(id) {
		const planet = await this.getResource(`/planets/${id}`)
		return this.#transformPlanet(planet);
	}

	async getAllStarships() {
		const res = await this.getResource('/starships/');
		return res.results.map(this.#transformStarship);
	}

	async getStarship(id) {
		const starship = await this.getResource(`/starships/${id}`);
		return this.#transformStarship(starship);
	}

	#getId(string) {
		const regExp = /[\d]+/g;
		console.log(string.match(regExp))
		return string.match(regExp);
	}

	#transformPlanet(planet) {
		return {
			id: this.#getId(planet.url),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diametr,
		}
	}

	#transformStarship(starship) {
		return {
			id: this.#getId(starship.url),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.costInCredits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCopacity: starship.cargoCopacity,
		}
	}

	#transformPerson(person) {
		return {
			id: this.#getId(person.url),
			name: person.name,
			gender: person.gender,
			birthYear: person.birthYear,
			eyeColor: person.eyeColor,
		}
	}
}

