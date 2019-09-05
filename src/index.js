import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppRouter from './containers/AppRouter/AppRouter';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import teasReducer from './store/reducers/teas';
import teaReducer from './store/reducers/tea';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    teasReducer: teasReducer,
    teaReducer: teaReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ));

ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
