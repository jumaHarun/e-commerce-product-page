const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // check if item is already in cart

            const found = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (found) {
                // if item already exists, increment quantity
                found.quantity += action.qty;

                return {
                    ...state,
                    totalItems: state.totalItems + action.qty,
                    totalPrice:
                        state.totalPrice +
                        Number(found.item.discountedPrice * action.qty),
                };
            } else {
                // if item does not exist, add it to cart
                const newItem = {
                    ...action.payload,
                    quantity: action.qty,
                };

                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                    totalItems: state.totalItems + action.qty,
                    totalPrice:
                        state.totalPrice +
                        Number(newItem.item.discountedPrice * action.qty),
                };
            }
        case 'REMOVE_FROM_CART':
            // find item in cart
            const itemToRemove = state.cartItems.find(
                (obj) => obj.item.id === action.payload.id
            );

            if (itemToRemove.quantity === 1) {
                // if quantity is 1, remove the item
                const newCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                return {
                    ...state,
                    cartItems: newCartItems,
                    totalItems: state.totalItems - 1,
                    totalPrice:
                        state.totalPrice -
                        Number(itemToRemove.item.discountedPrice),
                };
            } else {
                // if quantity is more than 1, decrement quantity
                itemToRemove.quantity -= 1;

                return {
                    ...state,
                    totalItems: state.totalItems - 1,
                    totalPrice:
                        state.totalPrice -
                        Number(itemToRemove.item.discountedPrice),
                };
            }
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
