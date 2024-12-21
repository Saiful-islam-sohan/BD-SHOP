import {createSlice} from '@reduxjs/toolkit'

const initialState = { value: 0 };


export const CartCountSlice = createSlice({
    name: "CartCount",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});



export const { increment, decrement } = CartCountSlice.actions;

export default CartCountSlice.reducer;
