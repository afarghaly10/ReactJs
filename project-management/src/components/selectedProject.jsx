import Tasks from './Tasks';
export default function selectedProject({
	project,
	onDelete,
	onAddTask,
	onDeleteTask,
	tasks,
}) {
	const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});

	return (
		<>
			<div className="w-[35rem] mt-16">
				<header className="pb-4 mb-4 border-b-2 border-stone-300">
					<div className="flex items-center justify-between">
						<h1 className="text-3xl font-bold text-[#22ECDB]">
							{project.title}
						</h1>
						<button
							className="text-[#FF738A] hover:text-red-700"
							onClick={onDelete}
						>
							🗑️
						</button>
					</div>
					<p className="mb-6 mt-1 text-[#9aa2cb]">{formattedDate}</p>
					<p className="text-[#3cec85] whitespace-pre-wrap">
						{project.description}
					</p>
				</header>
				<Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
			</div>
		</>
	);
}
