import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { quantity: 0, showCart: true, items: [] };

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		increment(state, action) {
			const itemId = action.payload;
			const item = state.items.find((item) => item.id === itemId);
			item.quantity++;
			item.total = item.total + item.price;
		},
		decrement(state, action) {
			const itemId = action.payload;
			const item = state.items.find((item) => item.id === itemId);
			item.quantity--;
			item.total = item.total - item.price;
		},
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
		addToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.quantity++;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					quantity: 1,
					total: newItem.price,
					price: newItem.price,
				});
			} else {
				existingItem.quantity++;
				existingItem.total = existingItem.total + newItem.price;
			}
		},
    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.quantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
