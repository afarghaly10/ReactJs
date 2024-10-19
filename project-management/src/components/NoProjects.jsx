import logo from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjects({ onAddProject }) {
	return (
		<div className="w-2/3 mt-24 text-center text-white">
			<img
				src={logo}
				alt="NoProjects"
				className="object-contain w-16 h-16 mx-auto"
			/>
			<h2 className="my-4 text-xl font-bold">No Project Selected</h2>
			<p className="mb-4">Select a project or start a new one</p>
			<p className="mt-8">
				<Button onClick={onAddProject}>Create a New Project</Button>
			</p>
		</div>
	);
}
