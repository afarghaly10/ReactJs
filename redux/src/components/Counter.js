import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
const { increment, decrement, increase, toggleCounter: toggle } = counterActions;

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseHandler = () => {
    dispatch(increase(5));
  }

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={incrementHandler}>Increment</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
