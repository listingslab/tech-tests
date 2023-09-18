import React from 'react';
import ReactDOM from 'react-dom/client';
import {WrapRedux} from "./redux/WrapRedux"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <WrapRedux>
    <App />
  </WrapRedux>
);
