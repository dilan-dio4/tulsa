import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './components/App';

const container = createRoot(document.getElementById('root'));
container.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)