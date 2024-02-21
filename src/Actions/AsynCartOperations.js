import { createAsyncThunk } from "@reduxjs/toolkit";
import CartService from "../Services/CartService";

export const GetCardDetailsAction = createAsyncThunk(
    'GetCardDetailsAction',
    async (userId) => {
        const response = await CartService.getInstance().GetCartDetails(userId);
        return {
            cart: response
        }
    }

)
export const AddToCartAction = createAsyncThunk(
    'AddToCartAction',
    async (details) => {
        const product = { productId: details.productId, quantity: details.quantity, unitPrice: details.unitPrice }
        const response = await CartService.getInstance().AddToCart(details.userId, product);
        return {
            cart: response
        }
    }

)