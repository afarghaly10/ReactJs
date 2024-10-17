import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModel(
	{ targetTime, remainingTime, onRestart, result },
	ref
) {
	const dialog = useRef();

	const userLost = remainingTime <= 0;
	const formattedTime = (remainingTime / 1000).toFixed(2);
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return (
		<dialog ref={dialog} className="result-modal" onClose={onRestart}>
			{userLost && <h2>You {result}: </h2>}
			{!userLost && <h2>Your Score: {score}</h2>}
			<p>
				The target time was <strong>{targetTime}</strong> seconds.
			</p>
			<p>
				Time was stopped with <strong>{formattedTime} seconds left.</strong>
			</p>
			<form method="dialog">
				<button onSubmit={onRestart}>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
