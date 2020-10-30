import React from 'react';
import {Box} from './components/perspective-box';

export const IntroSection: React.FC = () => {
    return (
        <header className="App-header">
            <div className="header-wrapper">
                <div className="wrapper--side-front"></div>
                <div className="wrapper--side-back u-center-text">
                <h1 className="h1">
                    Coming soon...
                </h1>
                </div>
            </div>
        </header>
    )
}