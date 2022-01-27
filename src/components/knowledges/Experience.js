import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Experience</h3>
            <dev className="exp-1">
                <h4>Developpeur Full-Stack -CTS(Cosmo Technogy Services)</h4>
                <h5>Depuis Janvier 2018</h5>
                <p>Gérer les projets backoffice (TDU, CRM) de CTS <br />
                   Gérer CRM and Accounting : des micro services en python <br />
                   Membre du team de Rocketrip Dev qui gere le grand projet 
                   Rocketrip de Mondee. Ce projet permet au componies de 
                   faire des economies sur le voyage de leurs employeees.<br />
                   Ce projet utilite deux technologies: Django backend et 
                   React JS en front. <br />
                   Autres projets: Flitgh Reservation, Car Reservation, Cruise Reservation
                   (Pour tous ces projets on utilise les apis de Sabre) <br />
                   Technologies: Python, Javascript, NodeJs,Typescript, React JS, FastApi,
                    Django, Postgres, MongoDb, JWT, Uvicorn, Heroku, Github Actions,
                    API de Sabre, Swagger.</p>
            </dev>
            <dev className="exp-2">
                <h4>Stage -HTSOFT</h4>
                <h5>De Juillet 2017 au Decembre 2017</h5>
                <p>Gerer des applications Backend en utilisant python, Django, Postgres
                   Utiliser PowerBI pour les reports de BI.</p>
            </dev>
            
        </div>
    );
};

export default Experience;