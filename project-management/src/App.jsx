import { useState } from 'react';
import Sidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import NoProjects from './components/NoProjects';

function App() {
	const [projects, setProjects] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	const handleAddNewProject = (project) => {
		setProjects((prevProjects) => {
			return {
				...prevProjects,
				selectedProjectId: null,
			};
		});
	};

	const handleAddProject = (project) => {
		setProjects((prevProjects) => {
			const newProject = { ...project, id: Math.random() };
			return {
				...prevProjects,
				selectedProjectId: undefined,
				projects: [...prevProjects.projects, newProject],
			};
		});
	};

	let content;

	if (projects.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} />;
	} else if (projects.selectedProjectId === undefined) {
		content = <NoProjects onAddProject={handleAddNewProject} />;
	}
	return (
		<>
			<main className="flex h-screen gap-8 my-8">
				<Sidebar onAddProject={handleAddNewProject} />
				{content}
			</main>
		</>
	);
}

export default App;
