import React from 'react';
import ItemDetails from '../ItemDetails';
import Record from '../ItemDetails/ItemDetails';
import { WithSwpiService } from '../hocHelpers';

export const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye color'/>
                <Record field='birthYear' label='Birth Year'/>
        </ItemDetails>  
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default WithSwpiService(mapMethodsToProps)(PersonDetails);