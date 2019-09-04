import React, { Component } from 'react';
import './AppRouter.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from '../../components/About/About';
import App from '../App/App';
import Tea from '../../containers/Teas/Tea/Tea';
import aws_exports from '../../aws-exports';
import Amplify from 'aws-amplify';

Amplify.configure(aws_exports);

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={App}/>
                <Route path="/about" component={About} exact/>
                <Route path="/tea/:id" component={Tea} exact/>
            </Router>
        );
    }
}

export default AppRouter;
