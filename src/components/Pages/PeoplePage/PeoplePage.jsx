import React from 'react';
import { useParams } from 'react-router-dom';
import './peoplePage.css';
import ErrorBoundry from '../../ErrorBoundry';
import { PersonList, PersonDetails } from '../../SWComponents';

const PeoplePage = () => {  
    const { id } = useParams();
    return(
        <ErrorBoundry>
            <PersonList path={'people'} />
            <PersonDetails itemId={id} />
        </ErrorBoundry> 
    )
}

export default PeoplePage;