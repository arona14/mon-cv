import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: 'Python', ex: 3},
            {id: 2, value: 'Javascript', ex: 1.5},

        ],
        framworks: [
            {id: 1, value: 'Django', ex: 3},
            {id: 2, value: 'Fast Api', ex: 1.5},
            {id: 3, value: 'React', ex: 1},

        ]
    }
    render() {
        let {languages, framworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={framworks}
                    title="framworks"
                    className="framworksDisplay"
                />

            </div>
        );
    }
}

export default Languages;