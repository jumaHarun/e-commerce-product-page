import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { getCurrencyLocale } from '../../utilis';

const BasketItem = ({ item, removeFromCart }) => {
    const { title, images, discountedPrice } = item;

    const { cartState } = useContext(CartContext);
    const { totalItems, totalPrice } = cartState;

    return (
        <div className="basket-item grid clr-gray">
            <div className="detail-img">
                <img src={`/images/${images[0]}.jpg`} alt="Cart item image" />
            </div>

            <div className="detail-text">
                <p>{title}</p>
                <p>
                    {getCurrencyLocale(discountedPrice)} x {totalItems}
                    <span className="bold clr-black">
                        {' '}
                        {getCurrencyLocale(totalPrice)}
                    </span>
                </p>
            </div>

            <div className="delete icon" onClick={() => removeFromCart(item)}>
                <img src="/images/icon-delete.svg" alt="" />
            </div>
        </div>
    );
};
export default BasketItem;
