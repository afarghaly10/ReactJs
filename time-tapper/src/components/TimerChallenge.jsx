import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
	const [timerExpired, setTimerExpired] = useState(false);
	const [timerStarted, setTimerStarted] = useState(false);
	let timer = useRef();

	const handleStart = () => {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
		}, 1000 * targetTime);

		setTimerStarted(true);
	};

	const handleStop = () => {
		clearTimeout(timer.current);
	};

	return (
		<section className="challenge">
			<h2>{title}</h2>
			{timerExpired && <p className="">Time's up!</p>}
			<p className="challenge-time">
				{targetTime} second{targetTime > 1 ? 's' : ''}
			</p>
			<p>
				<button onClick={timerStarted ? handleStop : handleStart}>
					{timerStarted ? 'Stop' : 'Start'}
				</button>
			</p>
			<p className={timerStarted ? 'active' : undefined}>
				{timerStarted ? `Time is ticking...` : `Press Start to begin`}
			</p>
		</section>
	);
}
