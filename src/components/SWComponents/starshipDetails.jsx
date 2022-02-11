import React from 'react';
import { WithSwpiService } from '../hocHelpers';
import ItemDetails from '../ItemDetails';
import Record from '../ItemDetails/ItemDetails';

export const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>

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