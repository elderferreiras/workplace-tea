import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap'

const nav = () => {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Workplace Tea <i className="fas fa-coffee" style={{fontSize: '18px'}}/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://twitter.com/workplacetea" className="nav-link" target="_blank" rel="noopener noreferrer" >Twitter</a>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default nav;