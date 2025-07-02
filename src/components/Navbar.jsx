// src/components/Navbar.jsx
import React, { useContext } from "react"; // Re-add useContext if you add the theme switcher back
import { NavLink } from "react-router-dom";
import Button from "./Button"; // Needed for the theme switcher
// import ThemeContext from '../context/ThemeContext'; // Uncomment if you add theme switcher

const Navbar = () => {
	// const { theme, toggleTheme } = useContext(ThemeContext); // Uncomment if you add theme switcher

	const navLinkStyles = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			textDecoration: isActive ? "underline" : "none",
			textUnderlineOffset: "4px",
			// color: isActive ? '#3b82f6' : '' // This line is for light mode, dark mode colors are handled by text-gray-900/dark:text-gray-100
		};
	};

	return (
		<header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
			<nav className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
						TaskMaster
					</h1>

					<div className="flex items-center space-x-2 md:space-x-4">
						<div className="flex space-x-2 md:space-x-6 text-sm md:text-lg">
							<NavLink
								to="/"
								style={navLinkStyles}
								className="px-2 py-1 hover:text-blue-500 transition-colors"
							>
								Home
							</NavLink>
							<NavLink
								to="/tasks"
								style={navLinkStyles}
								className="px-2 py-1 hover:text-blue-500 transition-colors"
							>
								Tasks
							</NavLink>
							<NavLink
								to="/api-data"
								style={navLinkStyles}
								className="px-2 py-1 hover:text-blue-500 transition-colors"
							>
								API Data
							</NavLink>
						</div>

						{/*
              // THEME SWITCHER LOGIC (Uncomment if you fix dependencies)
              <Button onClick={toggleTheme} variant="secondary" size="sm">
                {theme === 'light' ? '🌙' : '☀️'}
              </Button>
            */}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
