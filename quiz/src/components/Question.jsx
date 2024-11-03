import { useState } from 'react';
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

const Question = ({ index, onSelectAnswer, onSkipQuestion }) => {
	const [answer, setAnswer] = useState({
		selectedAnswer: '',
		isCorrect: null,
	});

	let timer = 10000;
	if (answer.selectedAnswer) timer = 1000;
	if (answer.isCorrect !== null) timer = 2000;

	const handleSelectAnswer = (selectedAnswer) => {
		setAnswer({
			selectedAnswer,
			isCorrect: null,
		});

		setTimeout(() => {
			setAnswer({
				selectedAnswer,
				isCorrect: QUESTIONS[index].answers[0] === selectedAnswer,
			});

			setTimeout(() => {
				onSelectAnswer(selectedAnswer);
			}, 1000);
		}, 1000);
	};

	let answerState = '';

	if (answer.selectedAnswer && answer.isCorrect !== null) {
		answerState = answer.isCorrect ? 'correct' : 'incorrect';
	} else if (answer.selectedAnswer) {
		answerState = 'answered';
	}

	return (
		<div id="questions">
			<QuestionTimer
				key={timer}
				timeout={timer}
				onTimeout={answer.selectedAnswer === '' ? onSkipQuestion : null}
				mode={answerState}
			/>
			<h2>{QUESTIONS[index].text}</h2>
			<Answers
				answers={QUESTIONS[index].answers}
				selectedAnswer={answer.selectedAnswer}
				answerState={answerState}
				onSelect={handleSelectAnswer}
			/>
		</div>
	);
};
export default Question;
