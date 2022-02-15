import React from 'react';
import './planetsPage.css';
import ErrorBoundry from '../../ErrorBoundry';
import { PlanetsList } from '../../SWComponents';

const PeoplePage = () => {
                     
    return(
        <ErrorBoundry> 
            <PlanetsList path={'planets'} />
        </ErrorBoundry> 
    )
}

export default PeoplePage;