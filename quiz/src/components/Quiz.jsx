import { useState } from 'react';
import QUESTIONS from '../questions.js';

const Quiz = () => {
	// handles between switching questions
	// const [activeQuestion, setActiveQuestion] = useState(0);

	// handles registering the user's answer
	const [selectedAnswer, setSelectedAnswer] = useState([]);

	// this is derived from the activeQuestion state and acts as question handling state
	const activeQuestionIndex = selectedAnswer.length;

	const handleSelectAnswer = (selectedAnswer) => {
		setSelectedAnswer((prevSelectedAnswer) => [
			...prevSelectedAnswer,
			selectedAnswer,
		]);
	};

	return (
		<div id="quiz">
			<div id="questions">
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id="answers">
					{QUESTIONS[activeQuestionIndex].answers.map((answer) => (
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
