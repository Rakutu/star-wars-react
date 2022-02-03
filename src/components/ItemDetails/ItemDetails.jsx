import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './ItemDetails.css';
import SwapiService from '../../services/SwapiService';

const Record = ({item, field, label}) => {
    return(
        <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </li>
    )
}

export default Record;

export class ItemDetails extends Component {
    state = {
        item: null,
        image: null
    }

    swapiService = new SwapiService()

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) return;

        getData(itemId)
            .then(item => this.setState({
                item,
                image: getImageUrl(item)
            }))
    }

    render() {
        if (!this.state.item) {
            return (
                <div className="card person__details">
                    <p>Choose character</p>
                </div>
            )
        }
        const { name } = this.state.item;
        const item = this.state.item;

        return(
            <div className="card person__details">
                <img className='person__image' src={this.state.image} alt={`${name} image`} />
                <div className="card-body">
                    <h4 className="person__title">{name}</h4>
                    <ul className="list-group">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}