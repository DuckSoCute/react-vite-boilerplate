import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//* https://reactjs.org/docs/strict-mode
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
