import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center relative bg-bg-secondary px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-text-tertiary text-xs tracking-[0.3em] uppercase mb-8 font-medium">
                        {t('hero.role')}
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-text-primary text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.03em] mb-6"
                >
                    {t('hero.name')}<br />
                    <span className="font-extralight text-text-muted">{t('hero.surname')}</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-2xl mb-8"
                >
                    <p className="text-text-secondary text-xl md:text-2xl leading-relaxed font-light mb-4">
                        {t('hero.tagline')}
                    </p>
                    <p className="text-text-muted text-base md:text-lg leading-relaxed">
                        {t('hero.description')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap items-center gap-6 mt-12"
                >
                    <button
                        onClick={scrollToProjects}
                        className="px-8 py-4 bg-text-primary text-bg-primary text-sm tracking-wide font-medium hover:bg-text-secondary transition-all duration-300"
                    >
                        {t('hero.cta_projects')}
                    </button>
                    <a
                        href="#contact"
                        className="px-8 py-4 border border-border-medium text-text-primary text-sm tracking-wide font-medium hover:border-text-primary transition-all duration-300"
                    >
                        {t('hero.cta_contact')}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex items-center gap-6 mt-16"
                >
                    <a href="https://github.com/mdigliodo" target="_blank" rel="noopener noreferrer" 
                       className="text-text-muted hover:text-text-primary transition-colors duration-300">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/mateodigliodo" target="_blank" rel="noopener noreferrer"
                       className="text-text-muted hover:text-text-primary transition-colors duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:mdigliodo@gmail.com"
                       className="text-text-muted hover:text-text-primary transition-colors duration-300">
                        <Mail className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            {/* Decorative gradient orb */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none" />
        </section>
    );
}