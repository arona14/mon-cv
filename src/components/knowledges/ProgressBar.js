import React from 'react';

const ProgressBar = (props) => {

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <dev className="years">
                <span>Annees D'experience</span>
                <span>1 an</span>
                <span> 5 ans</span>

            </dev>
            <dev>
                {
                    props.languages.map((item) => {
                    let xpYear = 5;
                    let progres = item.xp / xpYear * 100 + '%';
                    return (
                        <div key={item.id} className="languagesList">
                            <li>{item.value}</li>
                            <dev className="progressBar" style={{width:progres}}></dev>
                        </div>
                    )
                    })
                }
            </dev>
        </div>
    );
};

export default ProgressBar;