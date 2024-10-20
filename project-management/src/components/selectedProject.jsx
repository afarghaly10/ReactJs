import React from 'react';

export default function selectedProject({ project }) {
	const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold text-[#22ECDB]">{project.title}</h1>
					<button className="text-[#FF738A] hover:text-red-700">🗑️</button>
				</div>
				<p className="mb-4 text-[#EACD61]">{formattedDate}</p>
				<p className="text-[#3cec85] whitespace-pre-wrap">
					{project.description}
				</p>
			</header>
			TASks
		</div>
	);
}
