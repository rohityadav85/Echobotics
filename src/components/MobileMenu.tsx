'use client';

import { useState } from 'react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black z-40 pt-20 px-6 md:hidden">
            <div className="flex flex-col gap-6">
                <a href="#" className="text-xl">Use Cases</a>
                <a href="#" className="text-xl">How It Works</a>
                <a href="#" className="text-xl">Contact Us</a>
                <button className="bg-orange-600 px-6 py-3 rounded-lg text-left">Sign In</button>
            </div>
        </div>
    );
}
