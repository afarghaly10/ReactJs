import React from 'react';

const inputClasses =
	'w-full p-1 bg-gray-400 border border-b-2 border-gray-600 rounded-md bg-opacity-10 focus:outline-none focus:border-gray-100';

export default function Input({ label, textArea, ...props }) {
	return (
		<p className="flex flex-col gap-1 my-4">
			<label className="text-sm font-bold uppercase">{label}</label>
			{textArea ? (
				<textarea className={inputClasses} {...props} />
			) : (
				<input className={inputClasses} {...props} />
			)}
		</p>
	);
}
