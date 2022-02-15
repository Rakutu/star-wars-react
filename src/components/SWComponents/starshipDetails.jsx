import React from 'react';
import { WithSwpiService } from '../hocHelpers';
import ItemDetails from '../ItemDetails';
import Record from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';

export const StarshipDetails = (props) => {
    const { id } = useParams();
    return (
        <ItemDetails itemId={id} {...props}>

                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='costInCredits' label='Cost'/>

        </ItemDetails> 
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default WithSwpiService(mapMethodsToProps)(StarshipDetails);