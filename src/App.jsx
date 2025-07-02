import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Card from "./components/Card";
import TaskManagerPage from "./pages/TaskManagerPage";
import ApiDataPage from "./pages/ApiDataPage";

const HomePage = () => {
	<Card>
		<div className="text-center p-6">
			<h2 className="text-3xl font-bold mb-4">Welcome to Task Manager</h2>
			<p className="text-lg text-gray-600 dark:text-gray-300">
				This is a simple task management application built with React and
				Tailwind CSS.
			</p>
			<p className="mt-4">
				Navigate to the 'Tasks' page to manage your tasks, or checkout the 'API
				Data' page to view the tasks from the API.
			</p>
		</div>
	</Card>;
};

function App() {
	return (
		<Routes>
			{/* This is the main layout that wraps all pages*/}
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="tasks" element={<TaskManagerPage />} />
				<Route path="api-data" element={<ApiDataPage />} />
			</Route>

			<Route
				path="*"
				element={
					<Card>
						<div className="text-center p-6">
							<h2 className="text-3xl font-bold mb-4">404 Not Found</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300">
								The page you are looking for does not exist.
							</p>
						</div>
					</Card>
				}
			/>
		</Routes>
	);
}

export default App;
