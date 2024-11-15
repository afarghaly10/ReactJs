import { uiActions } from './ui';
import { cartActions } from './cart';

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

export const getCartData = (payload) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				'https://localhost-c102a-default-rtdb.firebaseio.com/cart.json'
			);

			if (!response.ok) {
				throw new Error('Fetching cart data failed.');
			}

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        quantity: cartData.quantity,
        title: cartData.title,
        total: cartData.total,
      }));
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error!',
					message: 'Fetching cart data failed!',
				})
			);
		}
	};
};
