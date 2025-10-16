// 'use client';
// import React from 'react';
// import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// const Footer = () => {
//     return (
//         <footer className="bg-black border-t border-orange-800/30 py-10 px-6">
//             <div className="max-w-6xl mx-auto text-center">
//                 <h3 className="text-2xl font-bold mb-4">
//                     <span className="text-orange-500">ECHO</span>Botics
//                 </h3>
//                 <p className="text-gray-400 mb-6">
//                     Redefining Human-AI Interaction.
//                 </p>
//                 <div className="flex justify-center gap-6 text-gray-400 mb-6">
//                     <Facebook className="hover:text-orange-500 transition" />
//                     <Instagram className="hover:text-orange-500 transition" />
//                     <Twitter className="hover:text-orange-500 transition" />
//                     <Linkedin className="hover:text-orange-500 transition" />
//                 </div>
//                 <p className="text-gray-500 text-sm">
//                     © {new Date().getFullYear()} EchoBotics. All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

'use client';
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-t from-[#1a0903] to-[#0d0d0d] text-white py-12 px-6 border-t border-orange-900/40 rounded-2xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Left Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        <span className="text-orange-500">ECHO</span>Botics
                    </h2>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        Echobotics is redefining human–AI interaction with real-time voice,
                        chat, and lip-sync technology.
                    </p>

                    <h4 className="text-gray-300 text-sm mb-2">Follow Us On!</h4>
                    <div className="flex gap-3">
                        {[
                            { icon: <Facebook size={16} />, href: '#' },
                            { icon: <Instagram size={16} />, href: '#' },
                            { icon: <Linkedin size={16} />, href: '#' },
                            { icon: <Youtube size={16} />, href: '#' },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="p-2 rounded-full bg-orange-700/20 border border-orange-600/30 hover:bg-orange-500/40 transition-all"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-orange-400">Home</a></li>
                        <li><a href="#" className="hover:text-orange-400">Use Cases</a></li>
                        <li><a href="#" className="hover:text-orange-400">Features</a></li>
                        <li><a href="#" className="hover:text-orange-400">Contact</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-orange-400">Contact</a></li>
                        <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Use Cases */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-orange-400">Electronics</a></li>
                        <li><a href="#" className="hover:text-orange-400">E-Commerce</a></li>
                        <li><a href="#" className="hover:text-orange-400">Voice Assistant</a></li>
                        <li><a href="#" className="hover:text-orange-400">Virtual Calls</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-orange-800/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
                <p>Copyright © {currentYear} Echobotics. All Rights Reserved.</p>
                <p className="mt-2 md:mt-0">
                    <a href="#" className="hover:text-orange-400">Terms & Conditions</a> |{' '}
                    <a href="#" className="hover:text-orange-400">Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
