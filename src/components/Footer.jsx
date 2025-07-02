import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-800 dark:bg-gray-800 shadow-inner mt-auto'>
            <div className='container mx-auto py-6 px-4'>
                <p className='text-center text-gray-500 dark:text-gray-400 text-sm'>
                    {`© ${new Date().getFullYear()} TaskMaster Project. All rights reserved.`}
                </p>
            </div>
        </footer>
    )
};

export default Footer;