import React from 'react';

export const IntroSection: React.FC = () => {
    return (
        <div className="section-intro u-center-tex">
            <h1 className="h1">
                This application is in development, using:
            </h1>
            <li className="list">
                <ul>Typescipt React</ul>
                <ul>NextJS</ul>
                <ul>Sass</ul>
                <ul>Docker & Kubernetes</ul>
                <ul>AWS</ul>
                <ul>Apollo & GraphQL</ul>
            </li>
        </div>
    )
}