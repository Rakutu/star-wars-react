import  React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = (props) => {

    const { itemList, renderItem, path} = props;

    const items = itemList.map((item) => {
        const { id } = item;
        const label = renderItem(item)
        return (
            <Link to={`/${path}/${id}`} className="list-group-item" key={id} >
                <span className="">{label}</span>
            </Link>
        )
    })

    return (
        <ul className="item-list list-group items-list__list">
            {items}
        </ul>
    )
}

ItemList.propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.object),
    renderItem: PropTypes.func,
}

export default ItemList;