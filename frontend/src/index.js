import React from 'react';
import ReactDOM from 'react-dom/client';  // Usar react-dom/client no React 18
import { BrowserRouter } from 'react-router-dom';  // Importar o BrowserRouter
import App from './App';
import './index.css';

// Pegue o elemento root
const rootElement = document.getElementById('root');

// Use createRoot para React 18
const root = ReactDOM.createRoot(rootElement);

// Envolva o aplicativo com BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
