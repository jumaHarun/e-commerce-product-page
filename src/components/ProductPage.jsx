import { useContext } from 'react';

import Cart from './CartComponents/Cart';
import { CartContext } from '../Context/CartContext';

import ProductDesc from './ProductComponents/ProductDesc';
import LightBox from './ProductComponents/LightBox';

import products from '../productsDetails.json';

function ProductPage() {
    const { isShown } = useContext(CartContext);

    return (
        <div className="product-page-wrapper">
            {isShown && <Cart />}

            {products.map((prod) => (
                <div key={prod.id} className="product-page grid">
                    <LightBox images={prod.images} />
                    <ProductDesc product={prod} />
                </div>
            ))}
        </div>
    );
}

export default ProductPage;
