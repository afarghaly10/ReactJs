import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
	const dialogRef = useRef();
	useImperativeHandle(ref, () => ({
		open: () => {
			dialogRef.current.showModal();
		},
	}));

	return createPortal(
		<dialog
			ref={dialogRef}
			className="p-4 rounded-md shadow-md backdrop:bg-[#3d435b80] backdrop:backdrop-blur-md bg-[#ffa2b21b] text-[#B78AFF] border border-[#ec5b22] border-opacity-50"
		>
			{children}
			<form method="dialog" className="mt-4 text-right">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	);
});

export default Modal;
