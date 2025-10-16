'use client';
import React from 'react';
import { Card } from '../ui/card';
import { Headphones, GraduationCap, ShoppingBag, Building2, Rocket } from 'lucide-react';

const useCases = [
    {
        icon: <Headphones className="w-8 h-8 text-orange-500" />,
        title: 'Customer Support',
        description: 'AI-powered real-time customer agents that talk naturally and resolve issues faster than ever.'
    },
    {
        icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
        title: 'Education',
        description: 'Interactive AI tutors that listen, explain, and engage students with real-time conversations.'
    },
    {
        icon: <ShoppingBag className="w-8 h-8 text-orange-500" />,
        title: 'E-Commerce',
        description: 'Personalized shopping assistants that guide customers, answer queries, and boost sales.'
    },
    {
        icon: <Building2 className="w-8 h-8 text-orange-500" />,
        title: 'Corporate Training',
        description: 'Smart training bots that provide instant feedback, mock interviews, and onboarding assistance.'
    },
    {
        icon: <Rocket className="w-8 h-8 text-orange-500" />,
        title: 'Startups',
        description: 'Empower your product with cutting-edge conversational AI that scales with your users.'
    },
];

const UseCasesSection = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-black to-orange-950/20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-12">
                    <span className="text-orange-500">Use</span> Cases
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {useCases.map((useCase, i) => (
                        <Card key={i} className="p-8 rounded-2xl bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-700/30 hover:border-orange-600/60 transition">
                            <div className="flex justify-center mb-4">{useCase.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                            <p className="text-gray-400">{useCase.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
