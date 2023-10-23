// @flow
import React from 'react';
import ReactDOM from 'react-dom/client';
// $FlowFixMe
import './theme/style.scss';
import App from './components/app';

const root = ReactDOM.createRoot(document.getElementById('react-root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
