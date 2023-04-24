import { useContext } from 'react';

import Cart from './CartComponents/Cart';
import { CartContext } from '../Context/CartContext';

import ProductDesc from './ProductComponents/ProductDesc';
import LightBox from './ProductComponents/LightBox';

import products from '../productsDetails.json';

function ProductPage() {
    const { isShown } = useContext(CartContext);

    return (
        <main className="product-page-wrapper pblock-1">
            {isShown && <Cart />}

            {products.map((prod) => (
                <div key={prod.id} className="product-page grid">
                    <LightBox images={prod.images} />
                    <ProductDesc product={prod} />
                </div>
            ))}
        </main>
    );
}

export default ProductPage;
