'use client';

const partners = ['VISA', 'AESS', 'SafetyWing', 'unqork', 'stitch', 'FC', 'Vital'];

export default function Partners() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h3 className="text-center mb-8">Our <span className="text-orange-500">Trusted</span> Partners</h3>
                <div className="flex flex-wrap justify-center items-center gap-12">
                    {partners.map((partner, i) => (
                        <div key={i} className="text-2xl font-bold text-gray-400 hover:text-white transition">{partner}</div>
                    ))}
                </div>
            </div>
        </section>
    );
}
