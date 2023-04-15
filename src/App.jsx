import './App.css';

import { CartProvider } from './Context/CartContext';

import Nav from './components/Nav';
import ProductPage from './components/ProductPage';

function App() {
    return (
        <div className="App">
            <CartProvider>
                <Nav />
                <ProductPage />
            </CartProvider>
        </div>
    );
}

export default App;
