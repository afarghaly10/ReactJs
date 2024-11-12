import Card from '../UI/ProductCard.js';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
const { addToCart } = cartActions;

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  const cartItem = {
    id: Number(id),
    title,
    price: Number(price),
    description
  };

  const addToCartHandler = () => {
    dispatch(addToCart(cartItem));
  }

  return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price?.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
