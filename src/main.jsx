import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { CartProvider } from './Context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </CartProvider>
);
