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

	const handleSaveNewProject = (project) => {
		setProjects((prevProjects) => {
			const newProject = { ...project, id: Math.random() };
			return {
				...prevProjects,
				selectedProjectId: undefined,
				projects: [...prevProjects.projects, newProject],
			};
		});
	};

	const handleCancelNewProject = () => {
		setProjects((prevProjects) => {
			return {
				...prevProjects,
				selectedProjectId: undefined,
			};
		});
	};

	let content;

	if (projects.selectedProjectId === null) {
		content = (
			<NewProject
				onAdd={handleSaveNewProject}
				onCancel={handleCancelNewProject}
			/>
		);
	} else if (projects.selectedProjectId === undefined) {
		content = <NoProjects onAddProject={handleAddNewProject} />;
	}
	return (
		<>
			<main className="flex h-screen gap-8 my-8">
				<Sidebar
					onAddProject={handleAddNewProject}
					projectsList={projects.projects}
				/>
				{content}
			</main>
		</>
	);
}

export default App;
