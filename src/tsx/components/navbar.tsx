import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <header className="header">
            <nav className="header--nav">
                <a className="header--nav__about" href="#">About</a>
                <a className="header--nav__portfolio" href="#">Portfolio</a>
                <a className="header--nav__contact" href="#">Contact</a>
            </nav>
        </header>
    )
}