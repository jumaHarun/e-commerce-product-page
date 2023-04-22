import './App.css';
// Components
import Nav from './components/Nav';
import ProductPage from './components/ProductPage';
// Products 
import products from './productsDetails.json';

function App() {
    const productPages = products.map((prod) => (
        <ProductPage key={prod.id} product={prod} />
    ));

    return (
        <div className="App">
            <Nav />
            {productPages}
        </div>
    );
}

export default App;
