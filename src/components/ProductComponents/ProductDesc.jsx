import json from '../../productDetails.json';
import AddToCart from '../CartComponents/AddToCart';

import {getCurrencyLocale} from '../../utilis'

function ProductDesc() {
    const { company, title, description, price, discount, discountedPrice } =
        json[0];

    

    return (
        <section className="product-desc pall-1">
            <div className="container">
                <p className="company bold clr-orange">{company}</p>
                <h1 className="title bold">{title}</h1>
                <p className="desc clr-gray pbottom-1">{description}</p>

                <div className="price-wrapper flex bold">
                    <h2 className="discounted-price">
                        {getCurrencyLocale(discountedPrice)}
                    </h2>
                    <span className="discount clr-orange"> {discount}%</span>
                    <p className="price clr-light-gray">
                        {getCurrencyLocale(price)}
                    </p>
                </div>

                <AddToCart item={json[0]} />
            </div>
        </section>
    );
}
export default ProductDesc;
