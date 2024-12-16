import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
export default function Modal({ title, children, onClose }) {
	return createPortal(
		<>
			<div className="backdrop" onClick={onClose} />
			<motion.dialog
				animate={{ y: 0, opacity: 1 }}
				initial={{ y: 30, opacity: 0 }}
				exit={{ y: 30, opacity: 0 }}
				open
				className="modal"
			>
				<h2>{title}</h2>
				{children}
			</motion.dialog>
		</>,
		document.getElementById('modal')
	);
}
