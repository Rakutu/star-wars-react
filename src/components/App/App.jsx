import React, {Component} from 'react';
import './App.css';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorMessage from '../ErrorMessage';
import SwapiService from '../../services/SwapiService';
import ErrorBoundry from '../ErrorBoundry';
import Header from '../Header';
import { SwapiServiceProvider } from '../ContextComponent';
import { PeoplePage, PlanetsPage, StarshipPage } from '../Pages';
import { StarshipDetails, PlanetDetails, PersonDetails } from '../SWComponents';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
                    <Router>
                        <div className="container">
                            <Header />
                            <RandomPlanet />
                            <div className="container__items mb-5">
                                <Routes>
                                    <Route path='/'  element={<WelcomeBlock />}/>

                                    <Route path='/people/' element={<PeoplePage/>} />
                                    <Route path='/people/:id/' element={<PeoplePage />} />

                                    <Route path='/planets/' element={<PlanetsPage/>} />
                                    <Route path='/planets/:id' element={<PlanetDetails />} />

                                    <Route path='/starships/' element={<StarshipPage/>} />
                                    <Route path='/starships/:id' element={<StarshipDetails />} />
                                </Routes>
                            </div>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}

const WelcomeBlock = () => {
    return <h2 className="welcome">Welcome to StarDB</h2>
}