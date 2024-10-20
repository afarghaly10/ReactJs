import { useState } from 'react';
import NewTask from './NewTask';
import deleteButton from '../assets/cross-mark_274c.png';

export default function Tasks({ tasks, onAdd, onDelete }) {
	return (
		<section>
			<h2 className="mb-4 text-2xl font-bold text-[#69C3FF]">Tasks</h2>
			<NewTask onAdd={onAdd} onDelete={onDelete} />
			{tasks.length === 0 ? (
				<p className="my-4 text-[#3cec85]">No Tasks available </p>
			) : (
				<ul className="p-4 mt-8 bg-gray-600 rounded-md bg-opacity-10">
					{tasks.map((task) => {
						return (
							<li key={task.id} className="flex justify-between my-4">
								<span>{task.text}</span>
								<button onClick={() => onDelete(task.id)}>
									<img
										src={deleteButton}
										alt="Delete"
										style={{ width: '20px', height: '20px' }}
									/>
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}
