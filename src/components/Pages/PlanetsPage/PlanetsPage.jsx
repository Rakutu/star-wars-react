import React, { Component } from 'react';
import './planetsPage.css';
import ErrorBoundry from '../../ErrorBoundry';
import { PlanetsList, PlanetDetails } from '../../SWComponents';

export default class PeoplePage extends Component {
    state = {
        selectPlanet: null
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectPlanet: id
        })
    }

    render() {                       
        const { selectPlanet } = this.state;
        return(
            <ErrorBoundry> 
                <PlanetsList onItemSelected={this.onPlanetSelected} />
                <PlanetDetails itemId={selectPlanet} />
            </ErrorBoundry> 
        )
    }
}