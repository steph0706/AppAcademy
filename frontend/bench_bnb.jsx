import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root';
import configureStore from './store/store';

    console.log("he");

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    console.log("he");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});