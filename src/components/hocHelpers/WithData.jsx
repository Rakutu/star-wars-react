import React, {Component} from 'react';
import Spiner from '../Spiner';
import ErrorMessage from '../ErrorMessage';

const withData = (View) => {
    return class extends Component {

        state = {
            itemList: null,
            hasError: false,
            load: true,
        }

        componentDidMount() {
            this.update()
        }

        update() {
            this.props.getData()
                .then(itemList => {
                    this.setState({
                        itemList,
                        load: false,
                    })
                })
                .catch(() => this.setState({
                    load: false,
                    hasError: true,
                }))
        }

        render() {
            
            const  { itemList, load, hasError } = this.state;

            if (load) return <Spiner/>
            if (hasError) return <ErrorMessage />

            return <View {...this.props} itemList={itemList} />
        }
    }
}

export default withData;