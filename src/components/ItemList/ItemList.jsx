import  React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import withData from '../hocHelpers/WithData';
import './ItemList.css';

const ItemList = (props) => {

    const { itemList, onItemSelected, renderItem} = props;

    const items = itemList.map((item) => {
        const { id } = item;
        const label = renderItem(item)
        return (
            <li className="list-group-item" key={id} onClick={() => onItemSelected(id)}>
                <span className="">{label}</span>
            </li>
        )
    })

    return (
        <ul className="item-list list-group items-list__list">
            {items}
        </ul>
    )
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);