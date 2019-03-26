import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ToDo from './components/ToDo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ToDo />, document.getElementById('ToDo'));


serviceWorker.unregister();
