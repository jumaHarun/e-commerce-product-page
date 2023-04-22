const ProductBox = ({ product }) => {
    const { title, images, company } = product;

    return (
        <div className="prod-box grid">
            <div className="box-img">
                <img src={`/images/${images[0]}.jpg`} alt={`a sneaker photo`} />
            </div>
            <div className="box-desc flex">
                <span>{company}</span>
                <h3>{title}</h3>

                <button className="box-btn icon">Description</button>
            </div>
            <hr />
        </div>
    );
};
export default ProductBox;

/*
{
  "id": "1",
  "company": "Sneaker Company",
  "title": "Fall Limited Edition Sneakers",
  "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  "price": "250",
  "discount": "50",
  "discountedPrice": "125",
  "images": [
    "image-product-1",
    "image-product-2",
    "image-product-3",
    "image-product-4"
  ]
}
*/
