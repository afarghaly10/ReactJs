import classes from './CartButton.module.css';
import {useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
const { toggleCart } = cartActions;

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleCounterHandler = () => {
		dispatch(toggleCart());
	};

  return (
		<button className={classes.button} onClick={toggleCounterHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>
				{cartQuantity <= 0 ? 0 : totalQuantity}
			</span>
		</button>
	);
};

export default CartButton;
