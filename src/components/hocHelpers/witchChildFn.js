import React from 'react';

const withChildFn = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props} renderItem={fn} />
        )
    }
}

export default withChildFn;