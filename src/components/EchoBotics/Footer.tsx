'use client';
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-orange-800/30 py-10 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">
                    <span className="text-orange-500">ECHO</span>Botics
                </h3>
                <p className="text-gray-400 mb-6">
                    Redefining Human-AI Interaction.
                </p>
                <div className="flex justify-center gap-6 text-gray-400 mb-6">
                    <Facebook className="hover:text-orange-500 transition" />
                    <Instagram className="hover:text-orange-500 transition" />
                    <Twitter className="hover:text-orange-500 transition" />
                    <Linkedin className="hover:text-orange-500 transition" />
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} EchoBotics. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
