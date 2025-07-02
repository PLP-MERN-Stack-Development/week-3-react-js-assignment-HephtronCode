import React, { useEffect, useState, useMemo } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const POSTS_PER_PAGE = 10; // Number of posts to fetch per page

const ApiDataPage = () => {
	// State to hold the fetched posts
	const [posts, setPosts] = useState([]);

	// State for loading state
	const [isLoading, setIsLoading] = useState(true);

	// State for potential errors
	const [error, setError] = useState(null);

	// State for search query
    const [searchQuery, setQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

	// useEffect to fetch data from the API
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setIsLoading(true);
				setError(null);

				const response = await fetch(
					`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${POSTS_PER_PAGE}`
				);

				if (!response.ok) {
					throw new Error("Failed to fetch posts");
				}

				const data = await response.json();
				setPosts(data);
			} catch (err) {
				setError(err.message);
				console.error("Error fetching posts:", err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPosts();
	}, [currentPage]);

	const filteredPosts = useMemo(() => {
		if (!searchQuery) {
			return posts;
		}

		return posts.filter((post) =>
			post.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [posts, searchQuery]);

	// Render loading state or error message
	if (isLoading) {
		return (
			<Card>
				<p className="text-center">Loading posts....</p>
			</Card>
		);
	}

	if (error) {
		return (
			<Card>
				<p className="text-center text-red-500">Error: {error}</p>
			</Card>
		);
	}

	return (
		<Card>
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold mb-4 text-center">
					Blog Posts from API
                </h2>
                <input
                    type="text" 
                    placeholder="Search posts by title"
                    value={searchQuery}
                    onChange={e => setQuery(e.target.value)}
                    className= "px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3 dark:bg-gray-800 dark:text-gray-200"
                />
			</div>
            <ul className="space-y-4">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <li key={post.id} className="border-b pb-4">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <p className="text-gray-700">{post.body}</p>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No posts found.</li>
                )}
            </ul>
            <div className="flex justify-between items-center mt06 pt-4 border-t border-gray-200">
                <Button
                    onClick={() => setCurrentPage(preview => Math.max(preview - 1, 1))}
                    disabled={currentPage === 1 || isLoading}
                    variant="secondary"
                >
                    Previous
                </Button>
                <span className="font-semibold">Page {currentPage}</span>
                <Button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={posts.length < POSTS_PER_PAGE || isLoading}
                    variant="secondary"
                >
                    Next
                </Button>
            </div>
        </Card>
	);
};

export default ApiDataPage;
