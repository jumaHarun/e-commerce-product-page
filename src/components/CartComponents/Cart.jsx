import { useContext } from 'react';

import { CartContext } from '../../Context/CartContext';

import BasketItem from './BasketItem';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-basket">
            <h4>Cart</h4>
            <hr />
            <div className="cart-details">
                {cartItems.map((obj) => (
                    <BasketItem key={obj.id} item={obj} />
                ))}
            </div>
            <button className="add-to-cart-btn checkout-btn bold icon">
                Checkout
            </button>
        </div>
    );
};
export default Cart;
