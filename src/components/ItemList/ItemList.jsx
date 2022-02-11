import  React from 'react';
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

export default ItemList;