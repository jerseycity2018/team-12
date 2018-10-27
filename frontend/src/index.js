import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-credit-cards/es/styles-compiled.css';
import ReactDOM from 'react-dom';
import './index.css';
import './menu.css'
import App from './App';
import Main from './Main'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
