import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                <img alt="" width="260" height="260" class="avatar avatar-user width-full border color-bg-primary" src="https://avatars.githubusercontent.com/u/36697032?v=4"/>
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
                        <a href="https://www.linkedin.com/in/arona-sow-8aba9b128/" target="_blank"
                        rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/arona14" target="_blank"
                        rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://web.facebook.com/arona.sow2" target="_blank"
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