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
                found.quantity += 1;

                return {
                    ...state,
                    totalItems: state.totalItems + 1,
                    totalPrice:
                        state.totalPrice + Number(found.item.discountedPrice),
                };
            } else {
                // if item does not exist, add it to cart
                const newItem = {
                    ...action.payload,
                    quantity: 1,
                };

                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                    totalItems: state.totalItems + 1,
                    totalPrice:
                        state.totalPrice + Number(newItem.item.discountedPrice),
                };
            }
        case 'REMOVE_FROM_CART':
            // find item in cart
            const itemToRemove = state.cartItems.find(
                (item) => item.id === action.payload.id
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
                    // totalPrice: state.totalPrice - Number(itemToRemove)
                };
            } else {
                // if quantity is more than 1, decrement quantity
                itemToRemove.quantity -= 1;

                return {
                    ...state,
                    totalItems: state.totalItems - 1,
                    // totalPrice: state.totalPrice - Number(itemToRemove)
                };
            }
            break;
        case 'INCREMENT_QTY':
            console.log('incrementQty');
            break;
        case 'DECREMENT_QTY':
            console.log('decrementQty');
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
