import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/billGates.jpg" alt="profile-pic"/>
                    <h3>Arona SOW</h3>
                </div>
            </div>

            <dev className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Competences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </dev>

            <dev className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://google.com" target="_blank"
                        rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank"
                        rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank"
                        rel="noopener noreferrer" ><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank"
                        rel="noopener noreferrer" ><i className="fab fa-facebook"></i></a>
                    </li>
                </ul>
            </dev>
            <dev className="signature">
                <p>2021 arona</p>
            </dev>
        </div>
    );
};

export default Navigation;