import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Fichier test pour le cour a suprimer ulterieurement
//todo A suprimer uniquement present pour les test du tuto
//import Greeter from './TEST/Greeter';
//import LogEntry from './TEST/LogEntry'
//ReactDOM.render(<Greeter whom="Roberto" />, document.getElementById('root'))
//ReactDOM.render(<LogEntry />, document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
