import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './app.scss';
import configureStore from './redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux';

	const store = configureStore()

ReactDOM.render(<ReduxProvider store={store}><App /></ReduxProvider>, document.getElementById("root"));
