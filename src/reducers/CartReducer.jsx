const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('addToCart', state);
            break;
        case 'REMOVE_FROM_CART':
            console.log('removeFromCart', state);
            break;
        case 'EMPTY_CART':
            return {
                ...state,
                cartItems: [],
                totalItems: 0,
                totalPrice: 0,
            };
        default:
            return state;
    }
};

export { cartReducer, initialState };
