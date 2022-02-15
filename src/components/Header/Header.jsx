import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
    return (
        <div className="header d-flex">
            <h3 className="header__title">
                <Link to="/" className="header__title-link">
                    StarDB
                </Link>
            </h3>
            <nav>
                <ul className="header__list d-flex">
                    <li className="header__item">
                        <NavLink to="/people/" className="header__link">
                            People
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/planets/" className="header__link">
                            Planets
                        </NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/starships/" className="header__link">
                            Starships
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}