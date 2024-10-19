export default function Sidebar() {
	return (
		<aside className="w-1/3 px-8 py-16 rounded bg-gradient-to-r from-sky-500 to-indigo-500 md:w-72-r-xl">
			<div className="relative z-0 w-full h-full overflow-hidden group">
				<div className="h-[7em] w-[20em] bg-blue-950 absolute left-full rounded-full -bottom-12 group-hover:scale-[550%] z-[-1] duration-700 easy-in-out"></div>
				<div className="h-[6em] w-[14em] bg-blue-700 absolute left-full rounded-full -bottom-12 group-hover:scale-[400%] z-[-1] duration-700 easy-in-out"></div>
				<div className="h-[4.9em] w-[10.2em] bg-blue-500 absolute left-full rounded-full -bottom-12 group-hover:scale-[300%] z-[-1] duration-700 easy-in-out"></div>
				<div className="h-[4.6em] w-[10em] bg-blue-950 absolute left-full rounded-full -bottom-12 group-hover:scale-[200%] z-[-1] duration-700 easy-in-out"></div>
				<div className="z-20 m-4">
					<h2 className="mb-8 font-bold uppercase font-body md:text-xl">
						Project List
					</h2>
					<div>
						<button className="px-4 py-2 text-xs rounded-md md:text-base bg-sky-900/50 hover:bg-sky-900/100">
							+ Add Project
						</button>
					</div>
					<ul></ul>
				</div>
			</div>
		</aside>
	);
}
