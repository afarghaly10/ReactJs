import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui';

const initialCartState = {
	quantity: 0,
	showCart: true,
	items: [],
	notification: null,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
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

export const sendCartData = (cartData) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data!',
			})
		);

		const sendRequest = async () => {
			// for code splitting (not necessary)
			const response = await fetch(
				'https://localhost-c102a-default-rtdb.firebaseio.com/cart.json',
				{
					method: 'PUT',
					body: JSON.stringify(cartData),
				}
			);

			if (!response.ok) {
				throw new Error('Sending cart data failed.');
			}
		};

		try {
			await sendRequest();
			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Data Sent...',
					message: 'Cart data sent successfully!',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Sending cart data failed!',
				})
			);
		}
	};
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
