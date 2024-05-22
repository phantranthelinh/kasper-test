import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice';
const App = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Hello world!</h1>
			<div>
				<button onClick={() => dispatch(decrement())}>-</button>
				<span>{count}</span>
				<button onClick={() => dispatch(increment())}>+</button>
			</div>
		</div>
	);
};

export default App;
