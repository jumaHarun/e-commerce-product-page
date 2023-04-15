import { useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/CartReducer';

const useCart = () => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    const clearCart = () => {
        dispatch({ type: 'EMPTY_CART' });
    };

    return { cartState, addToCart, removeFromCart, clearCart };
};

export default useCart;
