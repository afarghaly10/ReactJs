import React from 'react';
import completeQuizLogo from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

const Summary = ({ userAnswers }) => {
	const skipped = userAnswers.filter((answer) => answer === null).length;
	const correct = userAnswers.filter(
		(answer, index) => answer === QUESTIONS[index].answers[0]
	).length;

	const correctPersentage = Math.round((correct / userAnswers.length) * 100);
	const skippedPersentage = Math.round((skipped / userAnswers.length) * 100);
	const incorrectPersentage = 100 - skippedPersentage - correctPersentage;
	return (
		<div id="summary">
			<img src={completeQuizLogo} alt="Quiz complete" />
			<h2>Quiz Complete!</h2>
			<div id="summary-stats">
				<p>
					<span className="number">{correctPersentage}%</span>
					<span className="text correct">Correct</span>
				</p>
				<p>
					<span className="number">{incorrectPersentage}%</span>
					<span className="text">Incorrect</span>
				</p>
				<p>
					<span className="number">{skippedPersentage}%</span>
					<span className="text">Skipped</span>
				</p>
			</div>
			<ol>
				{userAnswers.map((answer, index) => {
					let cssClass = 'user-answer';
					if (answer === null) {
						cssClass += ' skipped';
					} else if (answer === QUESTIONS[index].answers[0]) {
						cssClass += ' correct';
					} else {
						cssClass += ' incorrect';
					}
					return (
						<li key={index}>
							<h3>{index + 1}</h3>
							<p className="question">{QUESTIONS[index].text}</p>
							<p className={cssClass}>{answer ?? 'Skipped'}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Summary;
