import React, { Component } from 'react';
import './ItemDetails.css';
import SwapiService from '../../services/SwapiService';
import Spiner from './../Spiner';
import ErrorMessage from './../ErrorMessage';

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
        image: null,
        hasError: false,
        load: true,
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
        
        this.setState({
            load: true
        })

        getData(itemId)
            .then(item => this.setState({
                item,
                image: getImageUrl(item),
                load: false,
            }))
            .catch(() => this.setState({
                hasError: true,
                load: false
            }))
    }

    render() {
        const { hasError, load } = this.state;
        const item = this.state.item;
        
        if (!item) {
            return (
                <div className="card person__details">
                    <p className="person__choose">Choose character</p>
                </div>
            )
        }
        
        if (load) {
            return (
                <div className="card person__details">
                    <Spiner />
                </div>
            )
        } else if (hasError) {
            return (
                <div className="card person__details">
                    <ErrorMessage />
                </div>
            )
        }
        
        const { name } = this.state.item;

        return(
            <div className="card person__details">
                <img className='person__image' src={this.state.image} alt={`${name}`} />
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