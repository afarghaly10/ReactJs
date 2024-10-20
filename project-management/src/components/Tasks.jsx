import { useState } from 'react';
import NewTask from './NewTask';

export default function Tasks({ onAdd, onDelete }) {
	return (
		<section>
			<h2 className="mb-4 text-2xl font-bold text-[#69C3FF]">Tasks</h2>
			<NewTask onAdd={onAdd} onDelete={onDelete} />
			<p className="my-4 text-[#3cec85]">No Tasks available </p>
			<ul>
				<li>Task 1</li>
				<li>Task 2</li>
				<li>Task 3</li>
			</ul>
		</section>
	);
}
