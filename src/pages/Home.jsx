import HeroSection from "@/components/brand/HeroSection";
import AboutSection from "@/components/brand/AboutSection";
import ServicesSection from "@/components/brand/ServicesSection";
import ProjectsSection from "@/components/brand/ProjectsSection";
import PricingSection from "@/components/brand/PricingSection";
import ContactSection from "@/components/brand/ContactSection";
import Footer from "@/components/brand/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-black">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <PricingSection />
            <ContactSection />
            <Footer />
        </div>
    );
}