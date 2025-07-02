// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. Create the provider component
export const ThemeProvider = ({ children }) => {
	// State to hold the current theme ('light' or 'dark')
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);

	// Effect to apply the theme to the body and save to localStorage
	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	// Function to toggle the theme
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	// The value that will be available to all consuming components
	const value = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

// 3. Export the context so other components can use it
export default ThemeContext;
