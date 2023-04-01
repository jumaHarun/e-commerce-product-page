import productDetails from '../../productDetails.json';

function ProductDesc() {
    const { company, title, description, price, discount, discountedPrice } =
        productDetails[0];
    return (
        <section className="product-desc">
            <p>{company}</p>
            <h1 className="bold">{title}</h1>
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
