import React from 'react';

const ProgressBar = (props) => {

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <dev className="years">
                <span>Annees D'experience</span>
                <span>10 ans</span>

            </dev>
            <dev>
                {
                    props.languages.map((item) => {
                    let xpYear = 10;
                    let progres = item.xp / xpYear * 100;
                    return (
                        <div key={item.id} className="languagesList">
                            <li>{item.value}</li>
                            <dev><progress value={progres} max="100"/></dev>
                        </div>
                    )
                    })
                }
            </dev>
        </div>
    );
};

export default ProgressBar;