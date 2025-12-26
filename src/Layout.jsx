import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Layout({ children, currentPageName }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="min-h-screen bg-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap');
                
                * {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }
                
                ::selection {
                    background: #ffffff;
                    color: #000000;
                }
                
                html {
                    scroll-behavior: smooth;
                }
                
                body {
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    background: #000000;
                }
            `}</style>

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled 
                        ? "bg-black/90 backdrop-blur-md border-b border-[#1a1a1a]" 
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex items-center justify-between h-20">
                        <Link 
                            to={createPageUrl("Home")}
                            className="text-white text-lg font-light tracking-[-0.01em] hover:text-[#aaa] transition-colors duration-300"
                        >
                            {t('nav.brand')}
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-[#888] text-sm tracking-wide hover:text-white transition-colors duration-300"
                            >
                                {t('nav.about')}
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="text-[#888] text-sm tracking-wide hover:text-white transition-colors duration-300"
                            >
                                {t('nav.projects')}
                            </button>
                            
                            <button
                                onClick={toggleLanguage}
                                className="text-[#888] text-sm tracking-wide hover:text-white transition-colors duration-300 flex items-center gap-2"
                            >
                                <Globe className="w-4 h-4" />
                                <span className="uppercase">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
                            </button>

                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                                className="px-5 py-2.5 bg-white text-black text-sm tracking-wide hover:bg-[#ddd] transition-colors duration-300"
                            >
                                {t('nav.hire')}
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <button
                                onClick={toggleLanguage}
                                className="text-white p-2"
                            >
                                <span className="uppercase text-sm font-medium">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 text-white"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-8">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-white text-2xl font-light text-left"
                            >
                                {t('nav.about')}
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="text-white text-2xl font-light text-left"
                            >
                                {t('nav.projects')}
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-white text-2xl font-light text-left"
                            >
                                {t('nav.contact')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page Content */}
            <main>
                {children}
            </main>
        </div>
    );
}