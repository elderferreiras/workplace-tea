import React from 'react';

const nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="index.html">Workplace Tea <i className="fas fa-coffee" style={{fontSize: '18px'}}/></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default nav;