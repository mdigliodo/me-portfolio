import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-32 md:py-40 bg-[#0f0f0f] px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                <div className="grid md:grid-cols-12 gap-12 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3"
                    >
                        <p className="text-[#666] text-xs tracking-[0.3em] uppercase font-medium">
                            {t('contact.label')}
                        </p>
                    </motion.div>

                    <div className="md:col-span-9">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] tracking-[-0.02em] mb-8"
                        >
                            {t('contact.title')}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-[#aaa] text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
                        >
                            {t('contact.description')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col gap-6 mb-16"
                        >
                            <a
                                href="mailto:mdigliodo@gmail.com"
                                className="inline-flex items-center gap-3 text-white text-lg md:text-xl hover:text-[#aaa] transition-colors duration-300 group"
                            >
                                <Mail className="w-5 h-5" />
                                <span>mdigliodo@gmail.com</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/mateodigliodo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-white text-lg md:text-xl hover:text-[#aaa] transition-colors duration-300 group"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span>linkedin.com/in/mateodigliodo</span>
                            </a>
                            <a
                                href="https://github.com/mdigliodo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-white text-lg md:text-xl hover:text-[#aaa] transition-colors duration-300 group"
                            >
                                <Github className="w-5 h-5" />
                                <span>github.com/mdigliodo</span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="pt-12 border-t border-[#222]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <p className="text-[#666] text-sm">
                                    {t('contact.availability_note')}
                                </p>
                                <a 
                                href="https://docs.google.com/document/d/1Gj1d_rFZpjY9IRibaGpY6woHW4sABDgVHc2JPqoAx8E/edit?usp=sharing"
                        target="_blank"
                                className="flex items-center gap-2 text-white text-sm px-6 py-3 border border-[#333] hover:border-[#555] transition-colors duration-300 w-fit">
                                    <Download className="w-4 h-4" />
                                    <span>{t('contact.download_cv')}</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}