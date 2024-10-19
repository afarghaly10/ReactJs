import { useState } from 'react';
import Sidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import NoProjects from './components/NoProjects';

function App() {
	const [projects, setProjects] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	const handleAddProject = (project) => {
		setProjects((prevProjects) => {
			return {
				...prevProjects,
				selectedProjectId: null,
			};
		});
	};

	let content;

	if (projects.selectedProjectId === null) {
		content = <NewProject />;
	} else if (projects.selectedProjectId === undefined) {
		content = <NoProjects onAddProject={handleAddProject} />;
	}
	return (
		<>
			<main className="flex h-screen gap-8 my-8">
				<Sidebar onAddProject={handleAddProject} />
				{content}
			</main>
		</>
	);
}

export default App;
