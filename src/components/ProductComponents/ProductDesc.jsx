import productDetails from '../../productDetails.json';

function ProductDesc() {
    const { company, title, description, price, discount, discountedPrice } =
        productDetails[0];

    const getCurrencyLocale = (str) => {
        return Number(str).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };

    return (
        <section className="product-desc pall-1">
            <div className="container">
                <p className="company clr-orange">{company}</p>
                <h1 className="bold">{title}</h1>
                <p className="desc">{description}</p>

                <div className="price-wrapper flex">
                    <h2 className="discounted-price">
                        {getCurrencyLocale(discountedPrice)}
                    </h2>
                    <span className="discount clr-orange"> {discount}%</span>
                    <p className="price">{getCurrencyLocale(price)}</p>
                </div>
            </div>
        </section>
    );
}
export default ProductDesc;
/*
{
    "company": "Sneaker Company",
    "title": "Fall Limited Edition Sneakers",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    "price": "250",
    "discount": "50",
    "discountedPrice": "125"
}
*/
