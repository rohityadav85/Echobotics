'use client';
import React from 'react';
import { ArrowDownCircle, ArrowRight, ArrowUpRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    const partners = ['VISA', 'AESS', 'SafetyWing', 'unqork', 'stitch', 'FC', 'Vital'];

    return (
        <section
            id="hero"
            className=" bg-gradient-to-r from-orange-900/30 via-transparent to-transparent"
        >
            <div className="w-full h-screen max-w-screen-xl mx-auto">
                <div className="w-full h-full grid grid-cols-12">
                    <div className="col-span-8 flex flex-col justify-center">
                        <h1
                            id="heading"
                            className="uppcase font-black uppercase text-7xl flex flex-col gap-2"
                        >
                            <p className="text-lg uppercase font-light text-orange-500">
                                Best Agentic AI
                            </p>
                            <p className="flex gap-4">
                                <span>Making </span>
                                <div className="w-2/5 bg-gradient-to-br from-orange-600 via-orange-400 to-yellow-300 rounded-[10px] [clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_40px,100%_100%,0_100%)]" />
                            </p>

                            <p className="">
                                <span>CONVERSATIONS </span>
                                <span>WITH</span>
                            </p>
                            <p className="">
                                <span>AI</span> <span className="text-orange-500">FEEL</span>{" "}
                                <span>
                                    REAL <span className="text-orange-500">.</span>
                                </span>
                            </p>
                        </h1>
                        <p className="text-lg">
                            Echobotics is redefining human–AI interaction with real-time
                            voice, chat, and lip-sync technology. Our AI doesn’t just
                            respond. It listens, talks, and connects like a real assistant.
                        </p>
                        <button className="mt-4 p-2 pl-4 flex items-center gap-5 w-fit rounded-md border border-orange-500 bg-orange-500/30 backdrop-blur-md">
                            <span className="text-xl font-semibold">Explore</span>
                            <div className="bg-orange-500 text-white px-2 py-2 rounded-md">
                                <ArrowUpRightIcon />
                            </div>
                        </button>

                        <div className="absolute bottom-0 translate-y-1/2 flex items-center justify-center">
                            <ArrowDownCircle className="absolute text-orange-300" size={50} />
                            <svg
                                viewBox="0 0 200 200"
                                className="w-38 h-38 animate-spin animation-duration-[10s]"
                            >
                                <defs>
                                    <path
                                        id="text-circle"
                                        d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                                    />
                                </defs>

                                <text
                                    fill="orange"
                                    font-size="16"
                                    font-weight="600"
                                    letter-spacing="2"
                                >
                                    <textPath href="#text-circle" startOffset="0%">
                                        Scroll • Scroll • Scroll • Scroll • Scroll • Scroll •
                                        Scroll •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col items-center justify-end">
                        <div className="flex items-center justify-center">
                            <ArrowUpRightIcon className="absolute" size={50} />
                            <svg
                                viewBox="0 0 200 200"
                                className="w-48 h-48 animate-spin animation-duration-[10s]"
                            >
                                <defs>
                                    <path
                                        id="text-circle"
                                        d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                                    />
                                </defs>

                                <text
                                    fill="white"
                                    font-size="16"
                                    font-weight="600"
                                    letter-spacing="2"
                                >
                                    <textPath href="#text-circle" startOffset="0%">
                                        Explore • Explore • Explore • Explore • Explore • Explore
                                        •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
