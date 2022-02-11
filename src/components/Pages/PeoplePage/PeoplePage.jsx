import React, { Component } from 'react';
import './peoplePage.css';
import ErrorBoundry from '../../ErrorBoundry';
import { PersonList, PersonDetails } from '../../SWComponents';

export default class PeoplePage extends Component {
    state = {
        selectPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectPerson: id
        })
    }

    render() {                       
        const { selectPerson } = this.state;
        return(
            <ErrorBoundry>
                <PersonList onItemSelected={this.onPersonSelected} />
                <PersonDetails itemId={selectPerson} />
            </ErrorBoundry> 
        )
    }
}