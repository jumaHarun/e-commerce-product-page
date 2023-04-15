import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
// import { addToCart } from '../../Context/cartReducer';

function AddToCart(item) {
    const [cartQty, setCartQty] = useState(0);

    // const { dispatch } = useContext(CartContext);

    // const addToCartHandler = (product) => {
    //     dispatch(addToCart(product));
    // };
    
    const plus = () => {
        if (cartQty >= 0) {
            setCartQty((prev) => prev + 1);
        }
    };

    const minus = () => {
        if (cartQty > 0) {
            setCartQty((prev) => prev - 1);
        }
    };

    const handleInputChange = (target) => {
        setCartQty(target.value);
    };

    return (
        <div className="add-to-cart-wrapper pblock-1 bold">
            <div className="input-wrapper grid center-all">
                <div className="icon minus" onClick={minus}>
                    <img src="/images/icon-minus.svg" alt="minus" />
                </div>
                <input
                    type="number"
                    name="cartInput"
                    id="cartInput"
                    placeholder="0"
                    value={cartQty}
                    aria-label="cart input"
                    onChange={(e) => handleInputChange(e.target)}
                />
                <div className="icon plus" onClick={plus}>
                    <img src="/images/icon-plus.svg" alt="plus" />
                </div>
            </div>

            <div className="cart-btn grid">
                <button
                    className="add-to-cart-btn flex center-all icon"
                    onClick={() => addToCartHandler(item)}
                >
                    <img src="/images/icon-cart-white.svg" alt="Add to cart" />
                    Add to cart
                </button>
            </div>
        </div>
    );
}
export default AddToCart;
