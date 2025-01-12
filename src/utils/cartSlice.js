import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:{items:["Apple","Banana"]},
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
});

export const {addItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;