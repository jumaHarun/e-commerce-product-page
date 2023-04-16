import { useContext } from 'react';
import Cart from './CartComponents/Cart';
import ProductDesc from './ProductComponents/ProductDesc';
import ProductGallery from './ProductComponents/ProductGallery';
import { CartContext } from '../Context/CartContext';

function ProductPage() {
    const { isShown } = useContext(CartContext);

    return (
        <main className="product-page grid">
            {isShown && <Cart />}
            <ProductGallery />
            <ProductDesc />
        </main>
    );
}
export default ProductPage;
