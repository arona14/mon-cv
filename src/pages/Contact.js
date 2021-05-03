import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard} from 'react-copy-to-clipboard';


const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <dev className="contactContent">
                <dev className="header"></dev>
                <dev className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Mboro</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="+221775427735">
                                <span className="clickInput" onClick={()=>
                                alert('Telephone copie')}>
                                    +221775427735
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="sowarona14@gmail.com">
                                <span className="clickInput" onClick={()=>
                                alert('email copie')}>
                                    sowarona14@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </dev>
                <dev className="socialNetwork">
                    <ul>
                        <a href="https://github.com/arona14" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/arona-sow-8aba9b128/" target="_blank"
                        rel="noopener noreferrer">
                            <h4>linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://web.facebook.com/arona.sow2" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Facebook</h4>
                            <i className="fab fa-facebook"></i>
                        </a>
                    </ul>
                </dev>
            </dev>
            
        </div>
    );
};

export default Contact;