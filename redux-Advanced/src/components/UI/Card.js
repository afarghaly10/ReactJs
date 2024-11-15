import classes from './Card.module.css';
import { useSelector } from 'react-redux';

const Card = (props) => {
	const cartItems = useSelector((state) => state.cart.items);
	const totalPrice = cartItems.reduce((acc, item) => acc + item.total, 0);
	return (
		<section
			className={`${classes.card} ${props.className ? props.className : ''}`}
		>
			<div>{props.children}</div>
			<div>
				<h2>Total : $ {totalPrice?.toFixed(2) || 0} </h2>
			</div>
		</section>
	);
};

export default Card;
