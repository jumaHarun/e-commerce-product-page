import { useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/CartReducer';
import { useState } from 'react';

const useCart = () => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);
    const [isShown, setIsShown] = useState(false);

    const addToCart = (item, qty ) => {
        dispatch({ type: 'ADD_TO_CART', payload: item, qty });
    };

    const removeFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    const emptyCart = () => {
        dispatch({ type: 'EMPTY_CART' });
    };

    return {
        cartState,
        addToCart,
        removeFromCart,
        emptyCart,
        isShown,
        setIsShown,
    };
};

export default useCart;
