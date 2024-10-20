import Button from './Button';

export default function Sidebar({ onAddProject, projectsList }) {
	const emoji = [
		'🚀',
		'🌟',
		'🎉',
		'🔥',
		'🌈',
		'🎨',
		'📦',
		'📚',
		'📝',
		'📊',
		'📈',
		'📉',
		'📜',
		'📋',
		'📌',
		'📍',
		'📎',
		'🖇',
		'📏',
		'📐',
		'📕',
		'📗',
		'📘',
		'📙',
		'📚',
		'📖',
		'🔖',
		'📛',
		'🔗',
		'📰',
		'📓',
		'📔',
		'📒',
		'📑',
		'🔒',
		'🔓',
		'🔏',
		'🔐',
		'🔑',
		'🗝',
		'🔨',
		'⛏',
		'⚒',
		'🛠',
		'🗡',
	];
	return (
		<aside className="w-1/3 px-8 py-16 bg-gray-600 border border-gray-600 rounded-r-lg bg-opacity-15 md:w-72-r-xl">
			<h2 className="mb-8 font-bold uppercase text-[#22ECDB] font-body md:text-xl">
				Project List
			</h2>
			<div>
				<Button onClick={onAddProject}>+ Add Project</Button>
			</div>
			<ul className="mt-8">
				{projectsList.map((project) => (
					<li key={projectsList}>
						<button className="w-full px-2 py-1 my-1 text-left rounded-sm hover:text-black hover:bg-gray-600">
							{emoji[Math.floor(Math.random() * emoji.length)]}
							{project.title}
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}
