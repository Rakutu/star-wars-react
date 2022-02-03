import React, { Component } from 'react';
import './peoplePage.css';
import SwapiService from '../../services/SwapiService';
import ItemDetails from '../ItemDetails';
import ErrorBoundry from '../ErrorBoundry';
import Record from '../ItemDetails/ItemDetails';
import ItemList from '../ItemList/ItemList';

export class PeoplePage extends Component {
    state = {
        selectItem: null,
    }

    swpiService = new SwapiService();

    onItemSelected = (id) => {
        this.setState({
            selectItem: id
        })
    }

    render() {
        const { getAllPeople, getPerson, getPersonImage, getStarship, getStarshipImage} = this.swpiService

        const itemList = <ItemList onItemSelected={this.onItemSelected} 
                                getData={getAllPeople} 
                                renderItem={({name, gender}) => `${name} (${gender})`}/>

        const personDetails =<ItemDetails itemId={this.state.selectItem}
                                        getData={getPerson}
                                        getImageUrl={getPersonImage}>

                                            <Record field='gender' label='Gender'/>
                                            <Record field='eyeColor' label='Eye color'/>
                                            <Record field='birthYear' label='Birth Year'/>

                                        </ItemDetails>

        const starshipDetails = <ItemDetails itemId={5}
                                        getData={getStarship}
                                        getImageUrl={getStarshipImage}>

                                        <Record field='model' label='Model'/>
                                        <Record field='length' label='Length'/>
                                        <Record field='costInCredits' label='Cost'/>

                                        </ItemDetails>                              

        return(
            <ErrorBoundry>
                {itemList}
                {personDetails}
            </ErrorBoundry> 
        )
    }
}