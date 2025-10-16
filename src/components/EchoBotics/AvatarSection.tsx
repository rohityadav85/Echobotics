'use client';
import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';

const avatars = [
    { name: 'Mia', role: 'Virtual HR Assistant', img: '/avatars/mia.png' },
    { name: 'Leo', role: 'AI Customer Agent', img: '/avatars/leo.png' },
    { name: 'Nora', role: 'AI Tutor', img: '/avatars/nora.png' },
];

const AvatarSection = () => {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-12">
                    Meet Our <span className="text-orange-500">AI Avatars</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {avatars.map((avatar, i) => (
                        <Card key={i} className="bg-gradient-to-br from-orange-900/20 to-transparent border-orange-600/30 p-6 rounded-2xl">
                            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-600/50">
                                <Image src={avatar.img} alt={avatar.name} fill className="object-cover" />
                            </div>
                            <h3 className="text-2xl font-bold">{avatar.name}</h3>
                            <p className="text-gray-400">{avatar.role}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AvatarSection;
