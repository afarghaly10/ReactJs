import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModel(
	{ result, targetTime },
	ref
) {
	return (
		<dialog ref={ref} className="result-modal">
			<h2>You {result}: </h2>
			<p>
				The target time was <strong>{targetTime}</strong> seconds.
			</p>
			<p>
				Time was stopped with <strong>X seconds left.</strong>
			</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
