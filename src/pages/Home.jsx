import { Suspense, lazy } from 'react';
import HeroSection from "@/components/brand/HeroSection";

// Lazy load non-critical sections
const AboutSection = lazy(() => import("@/components/brand/AboutSection"));
const ServicesSection = lazy(() => import("@/components/brand/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/brand/ProjectsSection"));
const PricingSection = lazy(() => import("@/components/brand/PricingSection"));
const ContactSection = lazy(() => import("@/components/brand/ContactSection"));
const Footer = lazy(() => import("@/components/brand/Footer"));

// Loading fallback component
const SectionLoader = () => (
    <div className="w-full h-96 flex items-center justify-center">
        <div className="animate-pulse w-8 h-8 rounded-full bg-slate-700"></div>
    </div>
);

export default function Home() {
    return (
        <div className="min-h-screen bg-black">
            <HeroSection />
            <Suspense fallback={<SectionLoader />}>
                <AboutSection />
                <ServicesSection />
                <ProjectsSection />
                <PricingSection />
                <ContactSection />
                <Footer />
            </Suspense>
        </div>
    );
}