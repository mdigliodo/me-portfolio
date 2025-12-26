import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useTranslation();

    const services = t('services.items', { returnObjects: true }).map((item, index) => {
        // We need to fetch the tech arrays from the original source or include them in the translation object.
        // It's safer to include them in the translation object even if they are consistent.
        // But for now, let's look at the implementation. The current ES/EN files have title and description but NOT tech.
        // I need to add 'tech' to the JSONs or keep them here manually.
        // The previous JSON update *did* include tech in my thought process, but I might have missed it in the file write if I copy-pasted wrong.
        // Let's check the JSON content I sent in the previous step.
        // I see "items": [ { "title": ..., "description": ... } ]. No "tech". 
        // So I should define the tech arrays here and merge them.
        
        const techStacks = [
            ["Angular", "Node.js", "AWS", "TypeScript"],
            ["Team Lead", "Code Review", "Mentoring", "DevOps"],
            ["Product Strategy", "Fintech", "Scalability", "UX/UI"]
        ];

        return {
            ...item,
            number: `0${index + 1}`,
            tech: techStacks[index]
        };
    });

    return (
        <section className="py-32 md:py-40 bg-black px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="text-[#666] text-xs tracking-[0.3em] uppercase font-medium mb-6">
                        {t('services.label')}
                    </p>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] tracking-[-0.02em] max-w-2xl">
                        {t('services.heading')}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.number}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                            className="group p-8 border border-[#222] hover:border-[#444] transition-all duration-300 bg-[#0a0a0a]"
                        >
                            <span className="text-[#444] text-xs font-mono mb-6 block">{service.number}</span>
                            <h3 className="text-white text-xl md:text-2xl font-light mb-4 group-hover:text-[#aaa] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-[#888] text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1a1a1a]">
                                {service.tech.map((tech, idx) => (
                                    <span key={idx} className="text-[#666] text-xs px-3 py-1 border border-[#222] rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}