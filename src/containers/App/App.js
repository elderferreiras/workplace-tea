import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from '../../components/About/About';
import Home from '../Home/Home';
import Tea from '../Tea/Tea';
import aws_exports from '../../aws-exports';
import Amplify from 'aws-amplify';

Amplify.configure(aws_exports);

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About} exact/>
                <Route path="/tea/:id" component={Tea} exact/>
            </Router>
        );
    }
}

export default App;
