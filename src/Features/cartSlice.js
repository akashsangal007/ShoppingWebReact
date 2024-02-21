import { createSlice } from "@reduxjs/toolkit";
import { AddToCartAction, GetCardDetailsAction } from "../Actions/AsynCartOperations";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: null,
        count: 0
    },
    reducers: {
        cartCount: (state, action) => {
            state.count = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetCardDetailsAction.pending, (state, action) => {
            console.log('cart pend')
        });
        builder.addCase(GetCardDetailsAction.fulfilled, (state, action) => {
            console.log('ful cart')
            state.cart = action.payload.cart;
            if (action.payload.cart.cartItems !== undefined)
                state.count = action.payload.cart.cartItems.length;
        });
        builder.addCase(GetCardDetailsAction.rejected, (state, action) => {
            console.log('rej')
        });
        builder.addCase(AddToCartAction.pending, (state, action) => {
            console.log('add cart pend')
        });
        builder.addCase(AddToCartAction.fulfilled, (state, action) => {
            console.log('add cart ful')
            state.cart = action.payload.cart;
            if (action.payload.cart.cartItems !== undefined)
                state.count = action.payload.cart.cartItems.length;
        });
        builder.addCase(AddToCartAction.rejected, (state, action) => {
            console.log('rej')
        });
    }
})
export default cartSlice.reducer;
export const { cartCount } = cartSlice.actions;
export const selectedCart = (state) => state.cart.cart;