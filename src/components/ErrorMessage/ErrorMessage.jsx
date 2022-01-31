import React from 'react';
import './errorMessage.css';

export const ErrorMessage = () => {
    return (
        <div className="error-message__wrapper">
            <img className='error-message__icon' src="https://cdn-icons-png.flaticon.com/512/2590/2590375.png" alt="error icon" />
            <div className="error-message__desc">
                <h2 className='error-message__title'>BOOM!</h2>
                <p className="error-message__text">Somtheing went wrong, but don`t worry, the droids have already taken off to solve the problem</p>
            </div>
        </div>
    )
}