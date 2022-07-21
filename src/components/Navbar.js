import propTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export class Navbar extends Component {
    static propTypes = {};
    
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Tech Tea</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
    </div>
  </div>
</nav>




            // responsive tailwind navbar 
            // <nav className="px-2 sm:px-4 py-2 sm:py-4 dark:bg-gray-900">
            //     <div className="container flex flex-wrap justify-between items-center mx-auto">
            //     <a href="https://swapnilmk.github.io/Tech-tea/" className="flex items-center">
            //         <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
            //         Tech tea
            //         </span>
            //     </a>

            //    {/* toggle button mobile view  */}
            //     <button
            //         data-collapse-toggle="navbar-default"
            //         type="button" id="toggleMenu"
            //         className="md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            //         aria-controls="navbar-default"
            //         aria-expanded="false"
            //     >
            //         <span className="sr-only">Open main menu</span>
            //         <svg
            //         className="w-6 h-6"
            //         aria-hidden="true"
            //         fill="currentColor"
            //         viewBox="0 0 20 20"
            //         xmlns="http://www.w3.org/2000/svg"
            //         >
            //         <path
            //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        
            //         ></path>
            //         </svg>
            //     </button>
            //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            //         <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            //         <li>
            //             <a
            //             href="/"
            //             className="py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            //             aria-current="page"
            //             >
            //             Home
            //             </a>
            //         </li>
            //         <li>
            //             <a
            //             href="/"
            //             className=" py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            //             >
            //             Blog
            //             </a>
            //         </li>
            //         <li>
            //             <a
            //             href="/"
            //             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            //             >
            //             About
            //             </a>
            //         </li>
            //         <li>
            //             <a
            //             href="/"
            //             className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            //             >
            //             Contact
            //             </a>
            //         </li>
            //         </ul>
            //     </div>
            //     </div>
            // </nav>
    );
    }
}

export default Navbar;
