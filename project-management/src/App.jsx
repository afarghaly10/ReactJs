import Sidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
function App() {
	return (
		<>
			<main className="flex h-screen gap-8 my-8">
				<Sidebar />
				<NewProject className="text-white" />
			</main>
		</>
	);
}

export default App;
