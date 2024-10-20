import { useState } from 'react';
import Sidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import NoProjects from './components/NoProjects';
import SelectedProject from './components/selectedProject';

function App() {
	const [projects, setProjects] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	const handleAddNewProject = (project) => {
		setProjects((prevProjects) => {
			return {
				...prevProjects,
				selectedProjectId: null,
			};
		});
	};

	const handleAddTask = (text) => {
		setProjects((prevState) => {
			const newTask = {
				text,
				projectId: prevState.selectedProjectId,
				id: Math.random(),
			};

			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks],
			};
		});
	};

	const handleDeleteTask = (id) => {
		setProjects((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.id !== id),
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

	const handleDeleteProject = () => {
		setProjects((prevProjects) => {
			return {
				...prevProjects,
				selectedProjectId: undefined,
				projects: [
					...prevProjects.projects.filter(
						(project) => project.id !== prevProjects.selectedProjectId
					),
				],
			};
		});
	};

	const selectedProject = projects.projects.find((project) => {
		return project.id === projects.selectedProjectId;
	});

	let content = (
		<SelectedProject
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projects.tasks}
		/>
	);

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
