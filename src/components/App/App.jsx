import React, {Component} from 'react';
import './App.css';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorMessage from '../ErrorMessage';

export default class App extends Component {
    state = {
        hasError: false,
    }
    
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
            <div className="container">
                <RandomPlanet />
                <div className="container__items mb-5">
                    <PeoplePage />
                </div>
                <div className="container__items mb-5">
                    <PeoplePage />
                </div>
                <div className="container__items mb-5">
                    <PeoplePage />
                </div>
            </div>
        )
    }
}