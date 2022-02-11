import React from 'react';
import { WithSwpiService } from '../hocHelpers';
import ItemDetails from '../ItemDetails';
import Record from '../ItemDetails/ItemDetails';

export const PlanetsDetails = (props) => {
    return (
        <ItemDetails {...props} >
                <Record field='population' label='Population'/>
                <Record field='rotationPeriod' label='Rotation Period'/>
                <Record field='diametr' label='Diametr'/>
        </ItemDetails> 
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetsImage
    }
}

export default WithSwpiService(mapMethodsToProps)(PlanetsDetails);