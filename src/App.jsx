// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav';
import ProductPage from './components/ProductPage';

function App() {
    return (
        <div className="App">
            <Nav />
            <ProductPage />
        </div>
    );
}

export default App;
