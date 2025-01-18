import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    name: 'cart',
    items: [],
  },
  reducers: {
    agregarItemToCart: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.items.push({...action.payload, quantity: 1})
        }
    },
    removerItemFromCart: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
    actualizarQuantity: (state, action) => {
        const item = state.items.find(item => item.id === action.payload.id);
        if (item) {
            item.quantity = action.payload.quantity;
        }
    }
  },
});

// Action creators are generated for each case reducer function
export const { agregarItemToCart, actualizarQuantity, removerItemFromCart } = cartSlice.actions;