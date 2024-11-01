import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import completeQuizLogo from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

const Quiz = () => {
	// handles between switching questions
	// const [activeQuestion, setActiveQuestion] = useState(0);

	// handles registering the user's answer
	const [selectedAnswer, setSelectedAnswer] = useState([]);

	// this is derived from the activeQuestion state and acts as question handling state
	const activeQuestionIndex = selectedAnswer.length;

	const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback((selectedAnswer) => {
		setSelectedAnswer((prevSelectedAnswer) => [
			...prevSelectedAnswer,
			selectedAnswer,
		]);
	}, []);

	const handleSkippedQuestion = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	if (isQuizComplete) {
		return (
			<div id="summary">
				<img src={completeQuizLogo} alt="Quiz complete" />
				<h2>Quiz Complete!</h2>
			</div>
		);
	}

	// shuffling answers
	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
		() => Math.random() - 0.5
	);

	return (
		<div id="quiz">
			<div id="questions">
				<QuestionTimer
					key={activeQuestionIndex}
					timeout={10000}
					onTimeout={handleSkippedQuestion}
				/>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id="answers">
					{shuffledAnswers.map((answer) => (
						<li key={answer} className="answer">
							<button onClick={() => handleSelectAnswer(answer)}>
								{answer}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Quiz;
