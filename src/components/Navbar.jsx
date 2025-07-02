import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	const navLinkStyles = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			textDecoration: isActive ? "underline" : "none",
			textUnderlineOffset: "4px",
			color: isActive ? "#3b82f6" : "",
		};
	};
	return (
		// this would make the nav bar stick to the top when scrolling
		<header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
			<nav className=" container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
						Task Manager
					</h1>
					<div className="flex space-x-8 text-lg">
						<NavLink
							to="/"
							style={navLinkStyles}
							className="hover:text-blue-500 transition-colors"
						>
							Home
						</NavLink>
						<NavLink
							to="/tasks"
							style={navLinkStyles}
							className="hover:text-blue-500 transition-colors"
						>
							Tasks
						</NavLink>
						<NavLink
							to="/api-data"
							style={navLinkStyles}
							className="hover:text-blue-500 transition-colors"
						>
							API Data
						</NavLink>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
