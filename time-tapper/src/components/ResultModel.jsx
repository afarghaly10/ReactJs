import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModel(
	{ result, targetTime },
	ref
) {
	const dialog = useRef();

	/*
  expose the a method that can be called with the help of ref outside this component
  the method is open() which will show work independently of the component
  The import of useRef is used to create a reference to the dialog element.
  A separate ref is needed for reaching out to the dialog element because the idea
  is to detach the dialog element from any other component and make it a standalone
  */

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return (
		<dialog ref={dialog} className="result-modal">
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
