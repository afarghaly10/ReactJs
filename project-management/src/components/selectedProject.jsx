export default function selectedProject({ project, onDelete }) {
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
					<p className="mb-6 mt-1 text-[#EACD61]">{formattedDate}</p>
					{/* <h3 className="mb-2 font-semibold text-[#9aa2cb90]">
						Project Details:
					</h3> */}
					<p className="text-[#3cec85] whitespace-pre-wrap">
						{project.description}
					</p>
				</header>
			</div>
		</>
	);
}
