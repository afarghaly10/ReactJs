import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import NewChallenge from './NewChallenge.jsx';

export default function Header() {
	const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

	function handleStartAddNewChallenge() {
		setIsCreatingNewChallenge(true);
	}

	function handleDone() {
		setIsCreatingNewChallenge(false);
	}

	return (
		<>
			<AnimatePresence>
				{isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
			</AnimatePresence>

			<header id="main-header">
				<h1>Your Challenges</h1>
				<motion.button
					whileHover={{ scale: 1.1 }}
					transition={{
						type: 'spring',
						stiffness: 500,
						mass: 0.5,
						damping: 10,
						duration: 0.5,
					}}
					className="button"
					onClick={handleStartAddNewChallenge}
				>
					Add Challenge
				</motion.button>
			</header>
		</>
	);
}