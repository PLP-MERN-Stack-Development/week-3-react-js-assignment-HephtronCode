import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <Navbar />

            {           /* Main content area */}
            <main className='flex-grow container mx-auto px-4 py-6'>


                {/* Outlet for nested routes */}
                <Outlet />


            </main>

            <Footer />

        </div>
    );
};

export default Layout;
