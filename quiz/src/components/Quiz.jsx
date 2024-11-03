import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

const Quiz = () => {
	const [selectedAnswer, setSelectedAnswer] = useState([]);
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
		return <Summary userAnswers={selectedAnswer} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipQuestion={handleSkippedQuestion}
			/>
		</div>
	);
};

export default Quiz;
