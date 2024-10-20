import Input from './Input';
import { useRef } from 'react';
import Modal from './Modal';

export default function NewProject({ onSave, onCancel, ...props }) {
	const modalRef = useRef();
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();

	const handleSave = () => {
		const title = ` ${titleRef.current.value}`;
		const description = descriptionRef.current.value;
		const dueDate = dueDateRef.current.value;

		// validation
		if (
			title.trim() === '' ||
			description.trim() === '' ||
			dueDate.trim() === ''
		) {
			modalRef.current.open();
			return;
		}
		onSave({ title, description, dueDate });
	};

	return (
		<>
			<Modal ref={modalRef} buttonCaption="Close">
				<h2 className="my-4 text-xl font-bold">Invalid Input</h2>
				<p className="mb-4 text-stone-400">Missing Values.</p>
				<p className="mb-4 text-stone-400">
					Please ensure you have filled all input fields.
				</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button
							className=" hover:text-red-700 text-[#FF738A]"
							onClick={onCancel}
						>
							Cancel
						</button>
					</li>
					<li>
						<button
							className="px-6 py-2 text-xs rounded-md md:text-base bg-gray-600/50 hover:bg-gray-600/20 text-[#69C3FF]"
							onClick={handleSave}
						>
							Save
						</button>
					</li>
				</menu>
				<div {...props}>
					<Input ref={titleRef} label="Title" type="text" />
					<Input
						ref={descriptionRef}
						label="Description"
						type="text"
						textArea
					/>
					<Input ref={dueDateRef} label="Due Date" type="date" />
				</div>
			</div>
		</>
	);
}
