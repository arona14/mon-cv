import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérèts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Foot ball</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-seedling"></i>
                    <span>Elevage</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;