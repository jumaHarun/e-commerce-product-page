import BasketItem from './BasketItem';

import json from '../../productDetails.json';

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
    const { emptyCart, cartState, removeFromCart } = useContext(CartContext);

    const handleCheckout = () => {
        // process checkout
        console.log('handleCheckout', cartState);
        emptyCart();
    };

    const cartItemsHtml = json.map((prod) => (
        <BasketItem key={prod.id} item={prod} removeFromCart={removeFromCart} />
    ));

    return (
        <div className="cart-basket">
            <h4>Cart</h4>
            <hr />
            {cartState.totalItems === 0 ? (
                <h4>Your cart is empty</h4>
            ) : (
                <div className="cart-details">
                    {cartItemsHtml}
                    <button
                        className="add-to-cart-btn checkout-btn bold icon"
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};
export default Cart;
