# E-commerce product page | Juma Harun

[![Netlify Status](https://api.netlify.com/api/v1/badges/3aa8d314-a96d-4b83-a9ce-d178f01ba7b0/deploy-status)](https://app.netlify.com/sites/jharun-ecommerce/deploys)

This is my solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Switch the large product image by clicking on the small thumbnail images
-   Add items to the cart
-   View the cart and remove items from it

### Screenshot

<img src="./public/screenshot.webp" alt="screenshot of e-commerce product page" width="100%"/>

---

### Links

-   Source code URL: [Github](https://github.com/jumaHarun/e-commerce-product-page)
-   Live Site URL: [Netlify](https://jharun-ecommerce.netlify.app/)

## My process

### Built with

-   [React](https://react.dev/) - JS library
-   Semantic JSX markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow

### What I learned

Having used react, I took advantage of both the **Context Hook** and **useReducer Hook** to implement the cart functionality. It's amazing how you can scale up when you combine these two.

Working with these hooks has really solidified my understanding of the abstraction behind them and I look forward to meeting with them in the wild.

Here's part of my **CartReducer** function 💯

```jsx
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
            ....
    }
}
```

### Continued development

Some of the issues I've noticed include:

-   The gallery image requires a bit of optimization
-   Both the cart and nav need to toggle off automatically. For now, the user has to click the icon to toggle them off
-   Users should be able to open a lightbox gallery by clicking on the large product image

I will continue focusing on these issues in future projects.

### Useful resources

-   [React Docs](https://www.react.dev) - This helped me really grasp how the _reducer hook_ works under the hood. I really liked this pattern and will use it going forward.

## Author

-   Website - [Juma Harun](https://jmambo.netlify.app/)

-   Twitter - [@jumaH4run](https://www.twitter.com/jumaH4run)

## Acknowledgments

Ian and Joseph at the [SpaceYaTech Mentorship](https://github.com/SpaceyaTech/SpaceYaTechMentorship)
