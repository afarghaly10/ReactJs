import Sidebar from './components/Sidebar';
import BackgroundLines from './components/ui/BgLines/BackgroundLines';
import logo from './assets/no-projects.png';
function App() {
	// return (
	// 	<>
	// 		<BackgroundLines>
	// 			<h2 className="relative z-20 py-2 font-sans text-2xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white md:text-4xl lg:text-7xl md:py-10">
	// 				"No Project Selected" , <br /> Sami Farghaly.
	// 			</h2>
	// 			<main className="h-screen my-8">
	// 				<Sidebar />
	// 			</main>
	// 		</BackgroundLines>
	// 	</>
	// );
	return (
		<>
			<h1 className="my-8 text-5xl font-bold text-center text-white font-title">
				Hello World
			</h1>
			<main className="h-screen my-8">
				<Sidebar />
			</main>
		</>
	);
}

export default App;
