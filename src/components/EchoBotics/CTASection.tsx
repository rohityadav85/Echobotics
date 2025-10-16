'use client';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 px-6 text-center bg-gradient-to-t from-orange-900/30 to-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Ready to <span className="text-orange-500">Build</span> with <span className="text-orange-500">EchoBotics</span>?
                </h2>
                <p className="text-gray-400 mb-10">
                    Start integrating conversational AI that speaks, listens, and connects with your users instantly.
                </p>
                <Button className="mx-auto flex items-center gap-2 group">
                    Get Started <ArrowRight className="group-hover:translate-x-1 transition" />
                </Button>
            </div>
        </section>
    );
};

export default CTASection;
