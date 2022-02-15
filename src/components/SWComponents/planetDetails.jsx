import React from 'react';
import { WithSwpiService } from '../hocHelpers';
import ItemDetails from '../ItemDetails';
import Record from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';

export const PlanetsDetails = (props) => {
    const { id } = useParams();
    return (
        <ItemDetails itemId={id} {...props} >
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