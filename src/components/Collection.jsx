import ProductBox from './ProductComponents/ProductBox';
import products from '../productsDetails.json';

const Collection = () => {
    const productEls = products.map((prod) => (
        <ProductBox key={prod.id} product={prod} />
    ));

    return (
        <main className="collection">
            <div className="container">{productEls}</div>
        </main>
    );
};

export default Collection;
