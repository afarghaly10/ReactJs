import React from 'react';

export default function ResultModel({ result, targetTime }) {
	return (
		<dialog className="result-modal" open>
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
}
