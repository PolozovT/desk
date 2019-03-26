import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ToDo from './components/ToDo';
import InProgress from './components/InProgress';
import Test from './components/Test';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ToDo />, document.getElementById('ToDo'));
ReactDOM.render(<InProgress />, document.getElementById('InProgress'));
ReactDOM.render(<Test />, document.getElementById('Test'));

serviceWorker.unregister();
