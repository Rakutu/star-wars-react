import React, { Component } from 'react';
import './starshipPage.css';
import ErrorBoundry from '../../ErrorBoundry';
import { StarshipList, StarshipDetails} from '../../SWComponents';

export default class PeoplePage extends Component {
    state = {
        selectStarship: null,
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectStarship: id
        })
    }

    render() {                       
        const { selectStarship } = this.state;
        return(
            <ErrorBoundry>
                <StarshipList onItemSelected={this.onStarshipSelected} />
                <StarshipDetails itemId={selectStarship} />
            </ErrorBoundry> 
        )
    }
}