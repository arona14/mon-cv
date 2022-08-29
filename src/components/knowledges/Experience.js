import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Experience</h3>
            <dev className="exp-1">
                <h4>Développeur Full Stack ― Mondee, Inc Distance</h4>
                <h5>Depuis mars 2020</h5>
                <p>Membre de l'équipe Rocketrip : <br />
                   L'objectif principal de ce projet est
                   d'aider les organisations à réduire leurs dépenses de voyages d'affaires. <br />
                   Rocketrip offre aux employés des prix à battre lorsque les employés réservent
                   des prix inférieurs à ces P2B, ils obtiennent des points.
                   Ces points leur permettent d'obtenir des récompenses (cartes cadeaux...)..<br />
                   Ce projet est construit en Django côté backend, Reactjs côté frontend. <br />
                   </p>
            </dev>
            <dev className="exp-2">
                <h4>Développeur Backend ― Cosmopolitan Travel Services Distance</h4>
                <h5>De janvier 2018 à mars 2020</h5>
                <p>Gérer TDU, projet comptable construit en python en utilisant les 
                   technologies suivantes : Django, pandas, numpy. <br />
                   Gérer CRM, un projet de gestionnaire de clientèle construit
                   en python en utilisant les technologies suivantes : FastApi, Postgres.<br />
                   Pygds : Il s'agit d'un package python qui nous aide à faire des
                   recherches de vols et d'hôtels, à effectuer une réservation sur Sabre GDS. <br />
                   </p>
            </dev>
            <dev className="exp-3">
                <h4>Stage -HTSOFT</h4>
                <h5>De Juillet 2017 au Decembre 2017</h5>
                <p>Gerer des applications Backend en utilisant python, Django, Postgres
                   Utiliser PowerBI pour les reports de BI.</p>
            </dev>
            
        </div>
    );
};

export default Experience;