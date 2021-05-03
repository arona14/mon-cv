import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: 'Python', xp: 3},
            {id: 2, value: 'Javascript', xp: 1.5},

        ],
        framworks: [
            {id: 1, value: 'Django', xp: 3},
            {id: 2, value: 'Fast Api', xp: 1.5},
            {id: 3, value: 'React', xp: 1},

        ]
    }
    render() {
        let {languages, framworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={framworks}
                    title="framworks"
                    className="frameworkDisplay"
                />

            </div>
        );
    }
}

export default Languages;