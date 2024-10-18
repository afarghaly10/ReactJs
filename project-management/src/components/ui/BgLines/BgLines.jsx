import React from 'react';
import BackgroundLines from './BackgroundLines';
import logo from '../../../assets/no-projects.png';

export default function BackgroundLinesDemo({ title, text }) {
	return (
		<BackgroundLines className="flex flex-col items-center justify-center w-full px-4">
			<img src={logo} alt="bg" className="object-contain h-30 w-44" />
			<h2 className="relative z-20 py-2 font-sans text-2xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white md:text-4xl lg:text-7xl md:py-10">
				"Sami Farghaly" , <br /> Software Engineer.
			</h2>
			<p className="max-w-xl mx-auto text-sm text-center md:text-lg text-neutral-700 dark:text-neutral-400">
				Get the best advices from our experts, including expert artists,
				painters, marathon enthusiasts and RDX, totally free.
			</p>
		</BackgroundLines>
	);
}
