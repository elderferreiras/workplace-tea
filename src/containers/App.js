import React, { Fragment, Component } from 'react';
import './App.scss';
import Header from '../components/Theme/Header/Header';
import Nav from '../components/Theme/Nav/Nav';
import Tea from '../components/Tea/Tea';
import Pagination from '../components/Theme/Pagination/Pagination';
import Footer from '../components/Theme/Footer/Footer'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Nav/>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <Tea/>
                            <Tea/>
                            <Tea/>
                            <Tea/>
                            <Tea/>
                            <Tea/>
                            <Tea/>
                            <Tea/>
                            <Tea/>
                            <Tea/>
                            <Pagination/>
                        </div>
                    </div>
                </div>
                <hr/>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
