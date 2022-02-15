import React from 'react';
import ItemDetails from '../ItemDetails';
import Record from '../ItemDetails/ItemDetails';
import { WithSwpiService } from '../hocHelpers';
import { useParams } from 'react-router-dom';

export const PersonDetails = (props) => {
    const { id } = useParams();
    return (
        <ItemDetails itemId={id} {...props} >
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