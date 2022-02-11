import React from 'react';
import { SwapiServiceConsumer } from "../ContextComponent";

const WithSwpiService = (mapMethodToProps) => (Wrapped) => {

    return(props) => {
        return (
            <SwapiServiceConsumer>
                {(swapiService) => {
                    const serviceProps = mapMethodToProps(swapiService);
                    return (
                        <Wrapped {...props} {...serviceProps} />
                    )
                }}
            </SwapiServiceConsumer>
        )
    }
}

export default WithSwpiService;