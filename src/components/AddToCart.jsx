import { useState } from 'react';

function AddToCart() {
    const [cartQty, setCartQty] = useState(0);

    const plus = (num) => {
        if (num >= 0) {
            setCartQty(num + 1);
        }
    };

    const minus = (num) => {
        if (num > 0) {
            setCartQty(num - 1);
        }
    };

    const handleInputChange = (target) => {
        setCartQty(target.value);
    };

    return (
        <div className="cart pblock-1 bold">
            <div className="input-wrapper grid center-all">
                <div className="icon minus" onClick={() => minus(cartQty)}>
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
                <div className="icon plus" onClick={() => plus(cartQty)}>
                    <img src="/images/icon-plus.svg" alt="plus" />
                </div>
            </div>

            <div className="cart-btn grid">
                <button className="add-to-cart-btn flex center-all icon">
                    <img
                        className="bg-white"
                        src="/images/icon-cart-white.svg"
                        alt="Add to cart"
                    />
                    Add to cart
                </button>
            </div>
        </div>
    );
}
export default AddToCart;
