import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useTranslation();

    const techStacks = [
        ["Angular", "Material Design", "React", "Node.js", "MySQL", "AWS"], // Mutual IAC
        ["Angular", "TypeScript", "Team Leadership", "Accessibility"], // Minsait
        ["Angular", "Node.js"], // Gasco
        ["Angular", "React", "Blockchain", "Microservices"], // Transvip
        ["Web3", "Angular", "Ionic", "Node.js", "Gamification"], // K-Sports
        ["Web3", "Angular", "Ionic", "Node.js", "Smart Contracts"], // GToken
        ["Web3", "Angular", "Ionic", "Node.js", "Marketplace", "Community"], // FAN
        ["Angular", "Node.js", "UX Research", "Insurance"] // Zurich
    ];
    
    // Featured status
    const featuredStatus = [true, true, false, false, false, false, false, false];

    const projects = t('projects.items', { returnObjects: true }).map((item, index) => {
        return {
            ...item,
            tech: techStacks[index],
            featured: featuredStatus[index]
        };
    });

    return (
        <section id="projects" className="py-32 md:py-40 bg-[#0a0a0a] px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="text-[#666] text-xs tracking-[0.3em] uppercase font-medium mb-6">
                        {t('projects.label')}
                    </p>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] tracking-[-0.02em] max-w-3xl">
                        {t('projects.heading')}
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 * index }}
                            className={`group relative p-8 md:p-10 border transition-all duration-500 ${
                                project.featured 
                                    ? 'border-[#333] bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] hover:border-[#555]' 
                                    : 'border-[#222] bg-[#0a0a0a] hover:border-[#333]'
                            }`}
                        >
                            {project.featured && (
                                <div className="absolute top-4 right-4">
                                    <span className="text-[#666] text-xs px-3 py-1 border border-[#333] rounded-full flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" />
                                        {t('projects.featured_badge')}
                                    </span>
                                </div>
                            )}

                            <div className="grid md:grid-cols-12 gap-8">
                                <div className="md:col-span-8">
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <h3 className="text-white text-2xl md:text-3xl font-light">
                                            {project.company}
                                        </h3>
                                        <span className="text-[#666] text-sm">•</span>
                                        <span className="text-[#666] text-sm">{project.period}</span>
                                    </div>
                                    
                                    <p className="text-[#888] text-sm mb-4 font-medium">
                                        {project.role}
                                    </p>

                                    <p className="text-[#aaa] text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="text-[#666] text-xs px-3 py-1.5 bg-[#111] border border-[#222] rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:col-span-4">
                                    <div className="space-y-6">
                                        {project.impact.map((stat, idx) => (
                                            <div key={idx} className="border-l-2 border-[#333] pl-4">
                                                <p className="text-white text-3xl font-light tracking-[-0.02em]">
                                                    {stat.metric}
                                                </p>
                                                <p className="text-[#666] text-sm mt-1">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 pt-16 border-t border-[#222] text-center"
                >
                    <p className="text-[#666] text-sm mb-6">
                        {t('projects.more_details')}
                    </p>
                    <a
                        href="https://github.com/mdigliodo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white text-sm tracking-wide hover:text-[#aaa] transition-colors duration-300 group"
                    >
                        <span>{t('projects.view_github')}</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}