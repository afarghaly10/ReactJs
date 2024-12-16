import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
export default function Modal({ title, children, onClose }) {
	return createPortal(
		<>
			<div className="backdrop" onClick={onClose} />
			<motion.dialog
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: { opacity: 1, y: 0 },
					exit: { y: 30, opacity: 0 },
				}}
				animate="visible"
				initial="hidden"
				exit="exit"
				transition={{ duration: 0.2 }}
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
