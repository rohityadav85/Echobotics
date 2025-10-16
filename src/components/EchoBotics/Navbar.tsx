// import React from 'react';
// import Link from 'next/link';

// const Navbar: React.FC = () => {
//     return (
//         <nav className="rounded-xl backdrop-blur-md bg-white/30 fixed z-50 left-1/2 top-10 -translate-x-1/2 w-full max-w-screen-xl mx-auto">
//             <div className="w-full h-full flex items-center justify-between  px-5 py-4">
//                 <h1 className="text-2xl">
//                     <span className="text-orange-500 font-bold">ECHO</span>
//                     <span className="text-white font-medium">Botics</span>
//                 </h1>
//                 <div className="flex gap-24">
//                     <a href="#">Use Cases</a>
//                     <a href="#">How It Works</a>
//                     <a href="#">Contact Us</a>
//                 </div>

//                 <div>
//                     <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200">
//                         Sign In
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;








'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed z-50 left-1/2 top-6 -translate-x-1/2 w-[95%] md:max-w-screen-xl rounded-xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tight">
                    <span className="text-orange-500">ECHO</span>
                    <span className="text-white">Botics</span>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12 text-white text-sm font-medium">
                    <Link href="#use-cases" className="hover:text-orange-400 transition-colors">
                        Use Cases
                    </Link>
                    <Link href="#how-it-works" className="hover:text-orange-400 transition-colors">
                        How It Works
                    </Link>
                    <Link href="#contact" className="hover:text-orange-400 transition-colors">
                        Contact Us
                    </Link>
                </div>

                {/* Sign In Button */}
                <div className="hidden md:block">
                    <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200">
                        Sign In
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-6 text-white bg-white/10 backdrop-blur-md rounded-b-xl">
                    <Link
                        href="#use-cases"
                        className="hover:text-orange-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Use Cases
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="hover:text-orange-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        How It Works
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-orange-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact Us
                    </Link>
                    <button
                        className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign In
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

