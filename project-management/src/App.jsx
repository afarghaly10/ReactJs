import { useState } from 'react';
import Sidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import NoProjects from './components/NoProjects';
import SelectedProject from './components/selectedProject';

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

	const handleSelectProject = (id) => {
		setProjects((prevProjects) => {
			return {
				...prevProjects,
				selectedProjectId: id,
			};
		});
	};

	let content = <SelectedProject />;

	if (projects.selectedProjectId === null) {
		content = (
			<NewProject
				onSave={handleSaveNewProject}
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
					onSelectProject={handleSelectProject}
				/>
				{content}
			</main>
		</>
	);
}

export default App;
