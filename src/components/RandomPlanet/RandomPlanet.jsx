import React, { Component } from 'react';
import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService.js'
import Spiner from '../Spiner';
import ErrorMessage from '../ErrorMessage';

export default class RandomPlanet extends Component {
    
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    };

    constructor() {
        super();
        console.log(this.swapiService)
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
         })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 60 + 2);
        this.swapiService.getPlanet(id)
                        .then(this.onPlanetLoaded)
                        .catch(this.onError)
    }

    render() {

        const {planet, loading, error} = this.state;
        const hasData = !(error || loading);
        
        const errorMessage = error ? <ErrorMessage /> : null
        const spiner = loading ? <Spiner /> : null
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return(
            <div className="random-planet jumbotron rounded">
                {spiner}
                {errorMessage}
                {content}
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`${name} planet`} />
            <div className="">
                <h4 className="title">{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diametr</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}