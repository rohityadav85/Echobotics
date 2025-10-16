// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 50);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
//             <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//                 <div className="text-2xl font-bold">
//                     <span className="text-orange-500">ECHO</span>Botics
//                 </div>

//                 <div className="hidden md:flex items-center gap-8">
//                     <a href="#" className="hover:text-orange-500 transition">Use Cases</a>
//                     <a href="#" className="hover:text-orange-500 transition">How It Works</a>
//                     <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
//                     <Button variant="default" size="default">Sign In</Button>
//                 </div>

//                 <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     {isMenuOpen ? <X /> : <Menu />}
//                 </button>
//             </div>

//             {isMenuOpen && (
//                 <div className="fixed inset-0 bg-black z-40 pt-20 px-6 md:hidden">
//                     <div className="flex flex-col gap-6">
//                         <a href="#" className="text-xl">Use Cases</a>
//                         <a href="#" className="text-xl">How It Works</a>
//                         <a href="#" className="text-xl">Contact Us</a>
//                         <Button variant="default" size="default">Sign In</Button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto mt-4 p-4 rounded-xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg">
            <div className="flex justify-between items-center w-full">
                {/* Logo or Brand Name */}
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                    <Link href="/ECHO Botics">ECHO<span className="text-orange-500">Botics</span>

                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/use-cases"
                            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Use Cases
                        </Link>
                    </li>
                    <li>
                        <Link href="/how-it-works"
                            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">How It Works
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us"
                            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Sign In Button */}
                <div>
                    <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200">
                        Sign In
                    </button>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;