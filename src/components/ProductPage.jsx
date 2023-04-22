import { useContext } from 'react';

import Cart from './CartComponents/Cart';
import { CartContext } from '../Context/CartContext';

import ProductDesc from './ProductComponents/ProductDesc';
// import ProductGallery from './ProductComponents/ProductGallery';
import LightBox from './ProductComponents/LightBox';

import json from '../productsDetails.json';

function ProductPage(product) {
    const { isShown } = useContext(CartContext);

    return (
        <div className="product-page grid">
            {isShown && <Cart />}
            {/* <ProductGallery /> */}
            {json.map((prod) => (
                <>
                    <LightBox key={prod.id} images={prod.images} />
                    <ProductDesc key={prod.id} product={prod} />
                </>
            ))}
        </div>
    );
}
export default ProductPage;
