import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

console.log(store.getState());

ReactDOM.render(app, document.getElementById('root'));