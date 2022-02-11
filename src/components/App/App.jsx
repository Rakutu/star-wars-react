import React, {Component} from 'react';
import './App.css';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorMessage from '../ErrorMessage';
import SwapiService from '../../services/SwapiService';
import ErrorBoundry from '../ErrorBoundry';
import { SwapiServiceProvider } from '../ContextComponent';
import { PeoplePage, PlanetsPage, StarshipPage } from '../Pages';


export default class App extends Component {
    state = {
        hasError: false,
    }

    swapiService = new SwapiService()
    
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage />
        }
        return (
            <ErrorBoundry >
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="container">
                        <RandomPlanet />
                        <div className="container__items mb-5">
                            <PeoplePage />
                            <PlanetsPage />
                            <StarshipPage />
                        </div>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}