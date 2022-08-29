import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <dev className="content">
                    <h1>Arona Sow</h1>
                    <h2>Developpeur Full-Stack</h2>
                    <dev className="pdf">
                        <a href='https://fteros.s3.us-east-2.amazonaws.com/media/customer_file/files.pdf' target="blank">Download CV</a>
                    </dev>
                </dev>
            </div>
        </div>
    );
};

export default Home;