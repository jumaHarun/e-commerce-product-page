import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

function AddToCart(item) {
    const { addToCart } = useContext(CartContext);

    const [cartQty, setCartQty] = useState(0);

    const plus = () => {
        setCartQty(cartQty + 1);
    };

    const minus = () => {
        return cartQty > 0 && setCartQty(cartQty - 1);
    };

    const handleInputChange = (target) => {
        console.log(target.value);
    };

    const handleAddToCart = () => {
        addToCart(item, cartQty);
        setCartQty(0);
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
                    placeholder="1+"
                    value={cartQty || ''}
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
                    onClick={handleAddToCart}
                    disabled={!cartQty}
                >
                    <img src="/images/icon-cart-white.svg" alt="Add to cart" />
                    Add to cart
                </button>
            </div>
        </div>
    );
}
export default AddToCart;
