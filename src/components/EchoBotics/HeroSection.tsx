// // // 'use client';
// // // import React from 'react';
// // // import { ArrowDownCircle, ArrowRight, ArrowUpRightIcon } from 'lucide-react';
// // // import { Button } from '@/components/ui/button';

// // // const HeroSection = () => {
// // //     const partners = ['VISA', 'AESS', 'SafetyWing', 'unqork', 'stitch', 'FC', 'Vital'];

// // //     return (
// // //         <section
// // //             id="hero"
// // //             className=" bg-gradient-to-r from-orange-900/30 via-transparent to-transparent"
// // //         >
// // //             <div className="w-full h-screen max-w-screen-xl mx-auto">
// // //                 <div className="w-full h-full grid grid-cols-12">
// // //                     <div className="col-span-8 flex flex-col justify-center">
// // //                         <h1
// // //                             id="heading"
// // //                             className="uppcase font-black uppercase text-7xl flex flex-col gap-2"
// // //                         >
// // //                             <p className="text-lg uppercase font-light text-orange-500">
// // //                                 Best Agentic AI
// // //                             </p>
// // //                             <p className="flex gap-4">
// // //                                 <span>Making </span>
// // //                                 <div className="w-2/5 bg-gradient-to-br from-orange-600 via-orange-400 to-yellow-300 rounded-[10px] [clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_40px,100%_100%,0_100%)]" />
// // //                             </p>

// // //                             <p className="">
// // //                                 <span>CONVERSATIONS </span>
// // //                                 <span>WITH</span>
// // //                             </p>
// // //                             <p className="">
// // //                                 <span>AI</span> <span className="text-orange-500">FEEL</span>{" "}
// // //                                 <span>
// // //                                     REAL <span className="text-orange-500">.</span>
// // //                                 </span>
// // //                             </p>
// // //                         </h1>
// // //                         <p className="text-lg">
// // //                             Echobotics is redefining human–AI interaction with real-time
// // //                             voice, chat, and lip-sync technology. Our AI doesn’t just
// // //                             respond. It listens, talks, and connects like a real assistant.
// // //                         </p>
// // //                         <button className="mt-4 p-2 pl-4 flex items-center gap-5 w-fit rounded-md border border-orange-500 bg-orange-500/30 backdrop-blur-md">
// // //                             <span className="text-xl font-semibold">Explore</span>
// // //                             <div className="bg-orange-500 text-white px-2 py-2 rounded-md">
// // //                                 <ArrowUpRightIcon />
// // //                             </div>
// // //                         </button>

// // //                         <div className="absolute bottom-0 translate-y-1/2 flex items-center justify-center">
// // //                             <ArrowDownCircle className="absolute text-orange-300" size={50} />
// // //                             <svg
// // //                                 viewBox="0 0 200 200"
// // //                                 className="w-38 h-38 animate-spin animation-duration-[10s]"
// // //                             >
// // //                                 <defs>
// // //                                     <path
// // //                                         id="text-circle"
// // //                                         d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
// // //                                     />
// // //                                 </defs>

// // //                                 <text
// // //                                     fill="orange"
// // //                                     font-size="16"
// // //                                     font-weight="600"
// // //                                     letter-spacing="2"
// // //                                 >
// // //                                     <textPath href="#text-circle" startOffset="0%">
// // //                                         Scroll • Scroll • Scroll • Scroll • Scroll • Scroll •
// // //                                         Scroll •
// // //                                     </textPath>
// // //                                 </text>
// // //                             </svg>
// // //                         </div>
// // //                     </div>

// // //                     <div className="col-span-4 flex flex-col items-center justify-end">
// // //                         <div className="flex items-center justify-center">
// // //                             <ArrowUpRightIcon className="absolute" size={50} />
// // //                             <svg
// // //                                 viewBox="0 0 200 200"
// // //                                 className="w-48 h-48 animate-spin animation-duration-[10s]"
// // //                             >
// // //                                 <defs>
// // //                                     <path
// // //                                         id="text-circle"
// // //                                         d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
// // //                                     />
// // //                                 </defs>

// // //                                 <text
// // //                                     fill="white"
// // //                                     font-size="16"
// // //                                     font-weight="600"
// // //                                     letter-spacing="2"
// // //                                 >
// // //                                     <textPath href="#text-circle" startOffset="0%">
// // //                                         Explore • Explore • Explore • Explore • Explore • Explore
// // //                                         •
// // //                                     </textPath>
// // //                                 </text>
// // //                             </svg>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </section>
// // //     );
// // // };

// // // export default HeroSection;

// // 'use client';
// // import React from 'react';
// // import { ArrowDownCircle, ArrowUpRightIcon } from 'lucide-react';

// // const HeroSection = () => {
// //     return (
// //         <section
// //             id="hero"
// //             className="bg-gradient-to-r from-orange-900/30 via-transparent to-transparent pt-32 pb-20 px-6 md:px-10"
// //         >
// //             <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10">
// //                 {/* Left Content */}
// //                 <div className="md:col-span-7 flex flex-col justify-center gap-6 text-white">
// //                     <h1 className="uppercase font-black text-4xl sm:text-5xl lg:text-7xl leading-tight">
// //                         <p className="text-lg uppercase font-light text-orange-500">
// //                             Best Agentic AI
// //                         </p>
// //                         <p className="flex gap-4">
// //                             <span>Making</span>
// //                             <div className="hidden sm:block w-2/5 bg-gradient-to-br from-orange-600 via-orange-400 to-yellow-300 rounded-[10px] [clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_40px,100%_100%,0_100%)]" />
// //                         </p>

// //                         <p>
// //                             CONVERSATIONS WITH
// //                         </p>
// //                         <p>
// //                             AI <span className="text-orange-500">FEEL</span> REAL
// //                             <span className="text-orange-500">.</span>
// //                         </p>
// //                     </h1>

// //                     <p className="text-base sm:text-lg text-gray-200 max-w-xl">
// //                         Echobotics is redefining human–AI interaction with real-time voice,
// //                         chat, and lip-sync technology. Our AI doesn’t just respond — it listens,
// //                         talks, and connects like a real assistant.
// //                     </p>

// //                     <button className="mt-4 px-6 py-3 flex items-center gap-3 w-fit rounded-md border border-orange-500 bg-orange-500/30 backdrop-blur-md hover:bg-orange-600/40 transition">
// //                         <span className="text-lg font-semibold">Explore</span>
// //                         <div className="bg-orange-500 text-white p-2 rounded-md">
// //                             <ArrowUpRightIcon />
// //                         </div>
// //                     </button>

// //                     {/* Scroll Circle */}
// //                     <div className="relative mt-12 flex items-center justify-center">
// //                         <ArrowDownCircle className="absolute text-orange-300" size={50} />
// //                         <svg
// //                             viewBox="0 0 200 200"
// //                             className="w-28 h-28 animate-spin [animation-duration:10s]"
// //                         >
// //                             <defs>
// //                                 <path
// //                                     id="scroll-circle"
// //                                     d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
// //                                 />
// //                             </defs>
// //                             <text fill="orange" fontSize="14" fontWeight="600" letterSpacing="2">
// //                                 <textPath href="#scroll-circle" startOffset="0%">
// //                                     Scroll • Scroll • Scroll • Scroll •
// //                                 </textPath>
// //                             </text>
// //                         </svg>
// //                     </div>
// //                 </div>

// //                 {/* Right Visual */}
// //                 <div className="md:col-span-5 flex justify-center md:justify-end items-center relative">
// //                     <ArrowUpRightIcon className="absolute text-orange-400" size={50} />
// //                     <svg
// //                         viewBox="0 0 200 200"
// //                         className="w-48 h-48 sm:w-60 sm:h-60 animate-spin [animation-duration:10s]"
// //                     >
// //                         <defs>
// //                             <path
// //                                 id="text-circle"
// //                                 d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
// //                             />
// //                         </defs>
// //                         <text fill="white" fontSize="16" fontWeight="600" letterSpacing="2">
// //                             <textPath href="#text-circle" startOffset="0%">
// //                                 Explore • Explore • Explore • Explore •
// //                             </textPath>
// //                         </text>
// //                     </svg>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default HeroSection;

// 'use client';
// import React from 'react';
// import { ArrowDownCircle, ArrowUpRightIcon } from 'lucide-react';

// const HeroSection = () => {
//     // Defined partners based on the screenshot (VISA, Ness, SafetyWing, unqork, stitch, XP/FC, Vital)
//     const partners = [
//         'VISA',
//         'Ness',
//         'SafetyWing',
//         'unqork',
//         'stitch',
//         'XP', // Adjusted from 'FC' based on common branding or visual interpretation
//         'Vital'
//     ];

//     return (
//         <section
//             id="hero"
//             className=" bg-gradient-to-r from-orange-900/30 via-transparent to-transparent"
//         >
//             <div className="w-full h-screen max-w-screen-xl mx-auto">
//                 <div className="w-full h-full grid grid-cols-12">
//                     <div className="col-span-8 flex flex-col justify-center">
//                         <p className="text-lg uppercase font-light text-orange-500">
//                             Best Agentic AI
//                         </p>
//                         <h1
//                             id="heading"
//                             className="uppcase font-black uppercase text-7xl flex flex-col gap-2"
//                         >
//                             <p className="flex gap-4">
//                                 <span>Making </span>
//                                 <div className="w-2/5 bg-gradient-to-br from-orange-600 via-orange-400 to-yellow-300 rounded-[10px] [clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_40px,100%_100%,0_100%)]" />
//                             </p>

//                             <p className="">
//                                 <span>CONVERSATIONS </span>
//                                 <span>WITH</span>
//                             </p>
//                             <p className="">
//                                 <span>AI</span> <span className="text-orange-500">FEEL</span>{" "}
//                                 <span>
//                                     REAL <span className="text-orange-500">.</span>
//                                 </span>
//                             </p>
//                         </h1>
//                         <p className="text-lg">
//                             Echobotics is redefining human–AI interaction with real-time
//                             voice, chat, and lip-sync technology. Our AI doesn’t just
//                             respond. It listens, talks, and connects like a real assistant.
//                         </p>
//                         <button className="mt-4 p-2 pl-4 flex items-center gap-5 w-fit rounded-md border border-orange-500 bg-orange-500/30 backdrop-blur-md">
//                             <span className="text-xl font-semibold">Explore</span>
//                             <div className="bg-orange-500 text-white px-2 py-2 rounded-md">
//                                 <ArrowUpRightIcon />
//                             </div>
//                         </button>

//                         <div className="absolute bottom-0 translate-y-1/2 flex items-center justify-center">
//                             <ArrowDownCircle className="absolute text-orange-300" size={50} />
//                             <svg
//                                 viewBox="0 0 200 200"
//                                 className="w-38 h-38 animate-spin animation-duration-[10s]"
//                             >
//                                 <defs>
//                                     <path
//                                         id="text-circle"
//                                         d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
//                                     />
//                                 </defs>

//                                 <text
//                                     fill="orange"
//                                     font-size="16"
//                                     font-weight="600"
//                                     letter-spacing="2"
//                                 >
//                                     <textPath href="#text-circle" startOffset="0%">
//                                         Scroll • Scroll • Scroll • Scroll • Scroll • Scroll •
//                                         Scroll •
//                                     </textPath>
//                                 </text>
//                             </svg>
//                         </div>
//                     </div>

//                     <div className="col-span-4 flex flex-col items-center justify-end">
//                         <div className="flex items-center justify-center">
//                             <ArrowUpRightIcon className="absolute" size={50} />
//                             <svg
//                                 viewBox="0 0 200 200"
//                                 className="w-48 h-48 animate-spin animation-duration-[10s]"
//                             >
//                                 <defs>
//                                     <path
//                                         id="text-circle"
//                                         d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
//                                     />
//                                 </defs>

//                                 <text
//                                     fill="white"
//                                     font-size="16"
//                                     font-weight="600"
//                                     letter-spacing="2"
//                                 >
//                                     <textPath href="#text-circle" startOffset="0%">
//                                         Explore • Explore • Explore • Explore • Explore • Explore
//                                         •
//                                     </textPath>
//                                 </text>
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* NEW: Our Trusted Partners Section */}
//             {/* Using a fixed position at the bottom of the viewport as per your screenshot layout implied */}
//             <div className="absolute bottom-0 left-0 w-full bg-orange-900/40 backdrop-blur-sm border-t border-orange-700/50 py-4 md:py-6 z-20">
//                 <div className="max-w-screen-xl mx-auto px-6 md:px-10">
//                     <h3 className="text-center text-sm sm:text-base font-bold text-orange-300 mb-4 md:mb-6">
//                         Our Trusted Partners
//                     </h3>
//                     <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6">
//                         {partners.map((partner) => (
//                             <span
//                                 key={partner}
//                                 className="text-base sm:text-xl font-semibold text-white/80 opacity-70 hover:opacity-100 transition duration-300"
//                             // In a real scenario, you'd replace this with an <img> tag for the logo:
//                             // <img src={`/logos/${partner.toLowerCase()}.svg`} alt={partner} className="h-6 sm:h-8" />
//                             >
//                                 {partner}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
'use client';

import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const HeroSection = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const partners = ['VISA', 'Ness', 'SafetyWing', 'unqork', 'stitch', 'XP', 'Vital'];

    return (
        <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
            {/* Navigation */}
            {/* <nav className="absolute top-0 w-full z-50 bg-black/20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">
                            <span className="text-orange-500">ECHO</span>Botics
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <a href="#" className="hover:text-orange-500 transition">Use Cases</a>
                            <a href="#" className="hover:text-orange-500 transition">How It Works</a>
                            <a href="#" className="hover:text-orange-500 transition">Contact Us</a>
                            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-lg transition">
                                Sign In
                            </button>
                        </div>

                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav> */}

            {/* Mobile Menu */}
            {
                isMenuOpen && (
                    <div className="fixed inset-0 bg-black z-40 pt-20 px-6 md:hidden">
                        <div className="flex flex-col gap-6">
                            <a href="#" className="text-xl">Use Cases</a>
                            <a href="#" className="text-xl">How It Works</a>
                            <a href="#" className="text-xl">Contact Us</a>
                            <button className="bg-orange-600 px-6 py-3 rounded-lg text-left">Sign In</button>
                        </div>
                    </div>
                )
            }

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-40">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-black to-black"></div>
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-8 flex flex-col justify-center">
                            <div className="text-sm text-orange-500 mb-4 tracking-widest uppercase">BEST AGENTIC AI</div>

                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
                                <p className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-2">
                                    <span>Making</span>
                                    <div className="w-full sm:w-2/5 h-12 bg-gradient-to-br from-orange-600 via-orange-400 to-yellow-300 rounded-[10px] [clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_40px,100%_100%,0_100%)]" />
                                </p>

                                <span>CONVERSATIONS WITH</span>

                                <p>
                                    <span>AI </span>
                                    <span className="text-orange-500">FEEL</span>
                                    <span> REAL</span>
                                    <span className="text-orange-500">.</span>
                                </p>
                            </h1>

                            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-8">
                                EchoBotics is redefining human-AI interaction with real-time voice, chat, and lip-sync technology. Our AI doesn't just respond. It listens, talks, and connects like a real assistant.
                            </p>

                            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-3 w-fit transition group border border-orange-500/50">
                                Explore
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                            </button>

                            {/* Left Scroll Circle */}
                            <div className="absolute bottom-32 left-6 md:left-10 flex items-center justify-center z-20">
                                <ChevronDown className="absolute text-orange-300" size={40} />
                                <svg viewBox="0 0 200 200" className="w-24 h-24 sm:w-28 sm:h-28 animate-spin" style={{ animationDuration: '10s' }}>
                                    <defs>
                                        <path id="scroll-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
                                    </defs>
                                    <text fill="orange" fontSize="14" fontWeight="600" letterSpacing="2">
                                        <textPath href="#scroll-circle" startOffset="0%">
                                            Scroll • Scroll • Scroll • Scroll •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Right Explore Circle */}
                        <div className="lg:col-span-4 flex justify-center items-center relative h-64 sm:h-80 lg:h-auto">
                            <svg className="absolute w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16L3 12m0 0l4-4m-4 4h18" />
                            </svg>
                            <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-60 sm:h-60 animate-spin" style={{ animationDuration: '10s' }}>
                                <defs>
                                    <path id="explore-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
                                </defs>
                                <text fill="white" fontSize="16" fontWeight="600" letterSpacing="2">
                                    <textPath href="#explore-circle" startOffset="0%">
                                        Explore • Explore • Explore • Explore •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Floating Circles Above Partners Section */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end gap-4 sm:gap-8 z-30 pointer-events-none">
                    {/* Left Float Circle */}
                    <div className="flex-shrink-0 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-orange-500/40 flex items-center justify-center bg-orange-500/10 backdrop-blur-sm">
                            <div className="text-orange-500 font-bold text-2xl">✦</div>
                        </div>
                    </div>

                    {/* Right Float Circle */}
                    <div className="flex-shrink-0 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-orange-500/50 flex items-center justify-center bg-orange-500/15 backdrop-blur-sm">
                            <div className="text-orange-500 font-bold text-3xl">◆</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partners Section */}
            <section className="relative py-16 sm:py-20 px-6 bg-gradient-to-b from-orange-900/20 to-transparent border-t border-orange-900/30">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-center text-orange-500 mb-8 sm:mb-12 text-lg sm:text-xl font-semibold tracking-wide">
                        Our Trusted Partners
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
                        {partners.map((partner, i) => (
                            <div key={i} className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-orange-400 transition duration-300 cursor-pointer">
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
};

export default HeroSection;