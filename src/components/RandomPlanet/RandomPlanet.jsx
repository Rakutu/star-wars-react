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

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 18 + 2);
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
            <div className="random-planet   ">
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
        <article className='card flex-row random-planet__container'>
            <img className='random-planet__image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`${name} planet`} />
            <div className="">
                <h4 className="random-planet__title">{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="random-planet__term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="random-planet__term">Rotation period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="random-planet__term">Diametr:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </article>
    )
}