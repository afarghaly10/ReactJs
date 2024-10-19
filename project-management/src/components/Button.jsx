import React from 'react';

export default function Button({ children, ...props }) {
	return (
		<button
			className="px-4 py-2 text-xs rounded-md md:text-base bg-gray-600/50 hover:bg-gray-600/20"
			{...props}
		>
			{children}
		</button>
	);
}
