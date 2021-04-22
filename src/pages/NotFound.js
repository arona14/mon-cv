import React from 'react';
import { NavLink} from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="notFound">
            <dev className="notFoundContent">
                <h3>Page not found</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </NavLink>
            </dev>

        </div>
    );
};

export default NotFound;