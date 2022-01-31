import React from 'react';
import './Spiner.css';

export const Spiner = () => {
    return (
        <div className="wrapper">
            <div className="loadWrapper">
                <img className='loadIcon' src="https://cdn-icons-png.flaticon.com/128/3069/3069042.png" alt="loading icon: starship" />
            </div>
        </div>
    )
}