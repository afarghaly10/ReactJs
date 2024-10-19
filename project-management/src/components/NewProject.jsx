import Input from './Input';

export default function NewProject({ ...props }) {
	return (
		<div className="w-[35rem] mt-16">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<button className="text-white hover:text-red-700">Cancel</button>
				</li>
				<li>
					<button className="px-6 py-2 text-xs text-white rounded-md md:text-base bg-gray-600/50 hover:bg-gray-600/20">
						Save
					</button>
				</li>
			</menu>
			<div {...props}>
				<Input label="Title" type="text" />
				<Input label="Description" type="text" textArea />
				<Input label="Due Date" type="date" />
			</div>
		</div>
	);
}
