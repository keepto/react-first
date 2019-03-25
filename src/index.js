import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Todo from './containers/Todo/index'
import ForLoop from './components/for-loop'

ReactDOM.render(
    <HashRouter>
        <Route exact path="/" component={App}/>
        <Route exact path="/todo" component={Todo}/>
        <Route exact path="/forLoop" component={ForLoop}/>
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
