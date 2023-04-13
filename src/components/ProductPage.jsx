import Cart from './CartComponents/Cart';
import ProductDesc from './ProductComponents/ProductDesc';
import ProductGallery from './ProductComponents/ProductGallery';

function ProductPage() {
    return (
        <main className='product-page grid'>
            <Cart/>
            <ProductGallery />
            <ProductDesc />
        </main>
    );
}
export default ProductPage;
