import Input from './Input';
import { useRef } from 'react';

export default function NewProject({ onAdd, ...props }) {
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	const handleSave = () => {
		const title = titleRef.current.value;
		const description = descriptionRef.current.value;
		const dueDate = dueDateRef.current.value;

		// validation
		onAdd({ title, description, dueDate });
	};

	return (
		<div className="w-[35rem] mt-16">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<button className="text-white hover:text-red-700">Cancel</button>
				</li>
				<li>
					<button
						className="px-6 py-2 text-xs text-white rounded-md md:text-base bg-gray-600/50 hover:bg-gray-600/20"
						onClick={handleSave}
					>
						Save
					</button>
				</li>
			</menu>
			<div {...props}>
				<Input ref={titleRef} label="Title" type="text" />
				<Input ref={descriptionRef} label="Description" type="text" textArea />
				<Input ref={dueDateRef} label="Due Date" type="date" />
			</div>
		</div>
	);
}
