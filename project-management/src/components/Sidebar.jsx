export default function Sidebar() {
	return (
		<aside className="w-1/3 px-8 py-16 text-white bg-gray-600 border border-gray-600 rounded-r-lg bg-opacity-15 md:w-72-r-xl">
			<h2 className="mb-8 font-bold uppercase font-body md:text-xl">
				Project List
			</h2>
			<div>
				<button className="px-4 py-2 text-xs rounded-md md:text-base bg-gray-600/50 hover:bg-gray-600/20">
					+ Add Project
				</button>
			</div>
			<ul></ul>
		</aside>
	);
}
