import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Rocket, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useTranslation();

    const skills = [
        { icon: Code2, label: t('about.skills.fullstack') },
        { icon: Users, label: t('about.skills.leadership') },
        { icon: Rocket, label: t('about.skills.cloud') },
        { icon: Award, label: t('about.skills.a11y') }
    ];

    return (
        <section id="about" className="py-32 md:py-40 bg-[#0f0f0f] px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 md:gap-8" ref={ref}>
                    {/* Left column - Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3"
                    >
                        <p className="text-[#666] text-xs tracking-[0.3em] uppercase font-medium">
                            {t('about.label')}
                        </p>
                    </motion.div>

                    {/* Right column - Content */}
                    <div className="md:col-span-9 space-y-12">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] tracking-[-0.02em]"
                        >
                            {t('about.title')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="grid md:grid-cols-2 gap-8 pt-8"
                        >
                            <p className="text-[#aaa] text-base leading-relaxed">
                                {t('about.desc1')}
                            </p>
                            <p className="text-[#aaa] text-base leading-relaxed">
                                {t('about.desc2')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
                        >
                            {skills.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center text-center gap-3 p-4 rounded-lg border border-[#222] hover:border-[#444] transition-colors duration-300">
                                    <skill.icon className="w-8 h-8 text-[#888]" />
                                    <p className="text-[#aaa] text-sm">{skill.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="pt-12"
                        >
                            <div className="flex flex-wrap gap-x-16 gap-y-8 pt-8 border-t border-[#222]">
                                <div>
                                    <p className="text-white text-4xl md:text-5xl font-light tracking-[-0.02em]">7+</p>
                                    <p className="text-[#666] text-sm mt-2">{t('about.metrics.years')}</p>
                                </div>
                                <div>
                                    <p className="text-white text-4xl md:text-5xl font-light tracking-[-0.02em]">10+</p>
                                    <p className="text-[#666] text-sm mt-2">{t('about.metrics.projects')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}