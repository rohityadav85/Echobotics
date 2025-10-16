'use client';
import React from 'react';
import { MessageSquare, Mic, Clock, Globe, Shield } from 'lucide-react';
import { Card } from '../ui/card';

const features = [
    {
        icon: <MessageSquare className="w-8 h-8" />,
        title: 'Real-Time Conversations',
        description: 'Conversations flow naturally with zero delays, making interactions feel as responsive as talking to a human.'
    },
    {
        icon: <Mic className="w-8 h-8" />,
        title: 'Voice Chat',
        description: 'Engage in lifelike voice chats where AI listens, responds, and adapts to your tone—making dialogue natural and interactive.'
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: 'Low Latency',
        description: 'With response time of under 500ms, EchoBotics delivers near-zero-lag conversations—fast, smooth, effortless.'
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: 'Multi-Language',
        description: 'Communicate effortlessly in multiple languages, breaking down barriers with AI that adapts to audiences and markets.'
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: 'Scalable & Secure',
        description: 'Built with scalability and top-tier security, EchoBotics can handle growth while keeping your data safe.'
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    EXPERIENCE THE <span className="text-orange-500">POWER</span> OF REAL AI <span className="text-orange-500">CONVERSATIONS</span>.
                </h2>

                <div className="grid md:grid-cols-5 gap-6 mt-16">
                    {features.map((f, idx) => (
                        <Card key={idx} className="p-6 bg-gradient-to-br from-orange-900/20 to-transparent rounded-2xl hover:border-orange-600/50 transition">
                            <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-orange-500">{f.icon}</div>
                            <h3 className="font-bold mb-2 text-lg">{f.title}</h3>
                            <p className="text-gray-400 text-sm">{f.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
