import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="rounded-xl backdrop-blur-md bg-white/30 fixed z-50 left-1/2 top-10 -translate-x-1/2 w-full max-w-screen-xl mx-auto">
            <div className="w-full h-full flex items-center justify-between  px-5 py-4">
                <h1 className="text-2xl">
                    <span className="text-orange-500 font-bold">ECHO</span>
                    <span className="text-white font-medium">Botics</span>
                </h1>
                <div className="flex gap-24">
                    <a href="#">Use Cases</a>
                    <a href="#">How It Works</a>
                    <a href="#">Contact Us</a>
                </div>

                <div>
                    <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;