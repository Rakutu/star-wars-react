import React from 'react';
import ItemList from '../ItemList/ItemList';
import { withData, 
        WithSwpiService,
        withChildFn,
        compose } from '../hocHelpers';

const renderName = ({ name }) => <span>{name}</span>;

const renderStarshipName = ({ name, model }) => <span>{name} ({model})</span>

const mapPersonMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}


export const PersonList = compose(WithSwpiService(mapPersonMethodToProps),
                                    withData,
                                    withChildFn(renderName)
                                    )(ItemList)

export const PlanetsList = compose(WithSwpiService(mapPlanetMethodToProps),
                                    withData,
                                    withChildFn(renderName)
                                    )(ItemList)

export const StarshipList = compose(WithSwpiService(mapStarshipMethodToProps),
                                    withData,
                                    withChildFn(renderStarshipName)
                                    )(ItemList)