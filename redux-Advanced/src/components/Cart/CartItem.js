import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
const {
	increment,
	decrement,
	removeFromCart,
} = cartActions;

const CartItem = (props) => {
	const { id, title, quantity, total, price } = props.item;
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(increment(id));
	};

	const decrementHandler = () => {
		dispatch(decrement(id));
	};

	const removeItemHandler = () => {
		dispatch(removeFromCart(id));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{' '}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button
						onClick={quantity === 1 ? removeItemHandler : decrementHandler}
					>
						-
					</button>
					<button onClick={incrementHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
