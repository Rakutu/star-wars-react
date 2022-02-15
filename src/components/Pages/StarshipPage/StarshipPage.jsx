import React from 'react';
import './starshipPage.css';
import ErrorBoundry from '../../ErrorBoundry';
import { StarshipList } from '../../SWComponents';

const StarshipPage = () => {

    return(
        <ErrorBoundry>
            <StarshipList path={'starships'} />
        </ErrorBoundry> 
    )
}

export default StarshipPage