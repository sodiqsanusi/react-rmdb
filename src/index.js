import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// IMPORTING THE GLOBAL STATE FROM A CONTEXT PROVIDER
import { GlobalProvider } from './globalstates/globalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);