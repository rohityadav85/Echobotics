'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    const partners = ['VISA', 'AESS', 'SafetyWing', 'unqork', 'stitch', 'FC', 'Vital'];

    return (
        <section className="relative min-h-screen  pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-black"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-6xl  flex flex-col items-baseline justify-center mx-auto px-6 ">
                <div className="text-sm text-orange-500 mb-4 tracking-widest">BEST AGENTIC AI</div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    MAKING<br />
                    <span className="relative inline-block">
                        CONVERSATIONS
                        <div className="absolute -top-2 -right-8 w-16 h-16 border-2 border-orange-500 rounded-full flex items-center justify-center">
                            <div className="text-orange-500 text-2xl">✱</div>
                        </div>
                    </span>
                    {' '}WITH<br />
                    AI <span className="text-orange-500">FEEL</span> Real.
                </h1>
                <p className="text-gray-400 max-w-3xl    mb-8 text-lg">
                    <span className="text-orange-500">EchoBotics</span> is redefining human-AI interaction with real-time voice, chat, and lip-sync technology.
                    Our AI doesn't just respond. It listens, talks, and connects like a real assistant.
                </p>
                <Button className="flex items-center mt-4 gap-2 ">
                    Explore <ArrowRight className="transition group-hover:translate-x-1" />
                </Button>

                <div className="absolute bottom-10 -right-40     -translate-x-1/2 flex gap-4">
                    <div className="w-32 h-32 rounded-full border-2 border-orange-500/30 flex items-center justify-center animate-spin-slow">
                        <div className="text-xs text-orange-500">SCROLL TO EXPLORE</div>
                    </div>
                </div>
            </div>

            {/* Trusted Partners */}
            <div className="absolute -bottom-20 w-full bg-gradient-to-t from-black to-transparent py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-center mb-8">Our <span className="text-orange-500">Trusted</span> Partners</h3>
                    <div className="flex flex-wrap justify-evenly  bg-red-300/10 backdrop-blur-lg  p-4 border-1 border-white rounded-md  items-center gap-12">
                        {partners.map((partner, i) => (
                            <div key={i} className="text-2xl font-bold text-gray-400 hover:text-white transition">{partner}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
