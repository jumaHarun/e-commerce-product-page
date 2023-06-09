import BasketItem from './BasketItem';

import products from '../../productsDetails.json';

import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
    const { emptyCart, cartState, removeFromCart } = useContext(CartContext);

    const handleCheckout = () => {
        // process checkout
        console.log('handleCheckout', cartState);
        emptyCart();
    };

    const cartItemsHtml = products.map((prod) => (
        <BasketItem key={prod.id} item={prod} removeFromCart={removeFromCart} />
    ));

    return (
        <div className="cart-basket">
            <h4>Cart</h4>
            <hr />

            <div className="cart-details">
                {cartState.totalItems === 0 ? (
                    <div className="grid center-all empty">
                        <h4 className='clr-gray'>Your cart is empty.</h4>
                    </div>
                ) : (
                    <>
                        {cartItemsHtml}
                        <button
                            className="add-to-cart-btn checkout-btn bold icon"
                            onClick={() => handleCheckout()}
                        >
                            Checkout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
export default Cart;
