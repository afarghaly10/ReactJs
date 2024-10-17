import React from 'react';

export default function Sidebar() {
	return (
		<aside className="w-1/3 px-8 py-16 rounded bg-gradient-to-r from-sky-500 to-indigo-500 md:w-72-r-xl">
			<h2 className="mb-8 font-bold uppercase font-body md:text-xl">
				Project List
			</h2>
			<div>
				<button className="px-4 py-2 text-xs rounded-md md:text-base bg-sky-900/50 hover:bg-sky-900/100">
					+ Add Project
				</button>
			</div>
			<ul></ul>
		</aside>
	);
}
