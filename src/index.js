import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.css';

import Display from './components/app';
// CALEB make changes
ReactDOM.render(
    <Provider store={store}>
        <Display />
    </Provider>,
    document.getElementById('root')
);
