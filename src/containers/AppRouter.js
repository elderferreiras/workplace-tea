import React, { Component } from 'react';
import './AppRouter.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import App from './App/App';
import Tea from '../containers/Teas/Tea/Tea';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={App}/>
                <Route path="/about" component={About} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/tea/:id" component={Tea} exact/>
            </Router>
        );
    }
}

export default AppRouter;
