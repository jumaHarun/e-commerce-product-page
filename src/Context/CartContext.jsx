import { createContext, useState } from 'react';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = ({ item, qty }) => {
        // const obj = {
        //     id: item.id,
        //     title: item.title,
        //     image: item.images[0],
        //     qty,
        // };

        // if (qty) {
        //     setCartItems((prev) => [...prev, obj]);
        // } else {
        //     console.log('Qty is zero');
        // }
        console.log(item, qty);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
export { CartContext, CartProvider };
