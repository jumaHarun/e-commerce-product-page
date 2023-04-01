import ProductDesc from './ProductComponents/ProductDesc';
import ProductGallery from './ProductComponents/ProductGallery';

function ProductPage() {
    return (
        <main className="main">
            <ProductGallery />
            <ProductDesc />
        </main>
    );
}
export default ProductPage;
