import { useState } from 'react';

export default function NewTask() {
	const [taskInput, setTaskInput] = useState();

	const handleTaskInput = (e) => {
		setTaskInput(e.target.value);
	};

	const handleSaveTask = () => {
		setTaskInput('');
	};
	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				className="w-64 px-2 py-1 bg-gray-400 border-gray-600 rounded-sm bg-opacity-15 focus:outline-none focus:border-gray-300"
				onChange={handleTaskInput}
				value={taskInput}
			/>
			<button className="bg-gray-600/50 hover:bg-gray-600/20">💾</button>
		</div>
	);
}
