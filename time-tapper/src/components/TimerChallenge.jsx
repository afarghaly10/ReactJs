import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
	// timer states
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
	let timer = useRef();
	const dialog = useRef();

	const isActiveTimer = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		dialog.current.open();
	}

	// timer refs

	// handle start and stop buttons
	const handleStart = () => {
		timer.current = setInterval(() => {
			setTimeRemaining((prevTime) => prevTime - 10);
		}, 10);
	};

	const handleStop = () => {
		dialog.current.open();
		clearInterval(timer.current);
	};

	const handleReset = () => {
		setTimeRemaining(targetTime * 1000);
	};

	return (
		<>
			<ResultModal
				ref={dialog}
				targetTime={targetTime}
				onRestart={handleReset}
				remainingTime={timeRemaining}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={isActiveTimer ? handleStop : handleStart}>
						{isActiveTimer ? 'Stop' : 'Start'}
					</button>
				</p>
				<p className={isActiveTimer ? 'active' : undefined}>
					{isActiveTimer ? `Time is ticking...` : `Press Start to begin`}
				</p>
			</section>
		</>
	);
}
