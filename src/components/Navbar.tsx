'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <span className="text-orange-500">ECHO</span>Botics
                </div>
                <div className="hidden md:flex items-center gap-0">
                    <a href="#" className="hover:text-orange-500 transition">Use Cases</a>
                    <a href="#" className="hover:text-orange-500 transition">How It Works</a>
                    <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
                    <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-lg transition">Sign In</button>
                </div>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
}
