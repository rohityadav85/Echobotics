import React from 'react';
import Navbar from '@/components/EchoBotics/Navbar';
import HeroSection from '@/components/EchoBotics/HeroSection';
import FeaturesSection from '@/components/EchoBotics/FeaturesSection';
import UseCasesSection from '@/components/EchoBotics/UseCasesSection';
import CTASection from '@/components/EchoBotics/CTASection';
import AvatarSection from '@/components/EchoBotics/AvatarSection';
import Footer from '@/components/EchoBotics/Footer';

const Page = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <CTASection />
      <AvatarSection />
      <Footer />
    </div>
  );
};

export default Page;
