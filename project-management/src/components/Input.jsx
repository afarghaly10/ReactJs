import { forwardRef } from 'react';

const inputClasses =
	'w-full p-1 bg-gray-400 border-b-2 border-gray-600 rounded-sm bg-opacity-15 focus:outline-none focus:border-gray-300 text-white';

const Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
	return (
		<p className="flex flex-col gap-1 my-4">
			<label className="text-sm font-bold text-white uppercase">{label}</label>
			{textArea ? (
				<textarea ref={ref} className={inputClasses} {...props} />
			) : (
				<input ref={ref} className={inputClasses} {...props} />
			)}
		</p>
	);
});

export default Input;
