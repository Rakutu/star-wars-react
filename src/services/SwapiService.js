
export default class SwapiService {
  	#apiBase = 'https://swapi.dev/api';
	#imageBase = `https://starwars-visualguide.com/assets/img/`;

  	async getResource(url) {
    	const res = await fetch(`${this.#apiBase}${url}`);

    	if (!res.ok) {
      		throw new Error (`Could not fetch ${url}, recieved ${res.status}`);
    	}	

    	return await res.json();
  	}

	getPersonImage = ({id}) => {
		return `${this.#imageBase}characters/${id}.jpg`;
	}

	getPlanetsImage = ({id}) => {
		return `${this.#imageBase}planets/${id}.jpg`;
	}

	getStarshipImage = ({id}) => {
		return `${this.#imageBase}starships/${id}.jpg`;
	}

	getAllPeople = async () => {
		const res = await this.getResource('/people/');
		return res.results.map(this.#transformPerson);
	}

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}`);
		return this.#transformPerson(person);
	}

	getAllPlanets = async () => {
		const res = await this.getResource('/planets/');
		return res.results.map(this.#transformPlanet);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}`)
		return this.#transformPlanet(planet);
	}

	getAllStarships = async () => {
		const res = await this.getResource('/starships/');
		return res.results.map(this.#transformStarship);
	}

	getStarship = async (id) => {
		const starship = await this.getResource(`/starships/${id}`);
		return this.#transformStarship(starship);
	}

	#getId(string) {
		const regExp = /[\d]+/g;
		return string.match(regExp);
	}

	#transformPlanet = (planet) => {
		return {
			id: this.#getId(planet.url),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diametr,
		}
	}

	#transformStarship = (starship) => {
		return {
			id: this.#getId(starship.url),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCopacity: starship.cargoCopacity,
		}
	}

	#transformPerson = (person) => {
		return {
			id: this.#getId(person.url)[0],
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
		}
	}
}

