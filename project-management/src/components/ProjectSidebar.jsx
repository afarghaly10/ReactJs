import Button from './Button';

export default function Sidebar({ onAddProject }) {
	return (
		<aside className="w-1/3 px-8 py-16 text-white bg-gray-600 border border-gray-600 rounded-r-lg bg-opacity-15 md:w-72-r-xl">
			<h2 className="mb-8 font-bold uppercase font-body md:text-xl">
				Project List
			</h2>
			<div>
				<Button onClick={onAddProject}>+ Add Project</Button>
			</div>
			<ul></ul>
		</aside>
	);
}
