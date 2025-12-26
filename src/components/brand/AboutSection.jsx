import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Rocket, Award } from "lucide-react";

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { icon: Code2, label: "Full Stack Development" },
        { icon: Users, label: "Team Leadership" },
        { icon: Rocket, label: "Cloud Architecture" },
        { icon: Award, label: "Accessibility (a11y)" }
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
                            About Me
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
                            Más allá del código: ingeniero de soluciones 
                            escalables y accesibles.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="grid md:grid-cols-2 gap-8 pt-8"
                        >
                            <p className="text-[#aaa] text-base leading-relaxed">
                                Combino ingeniería de software avanzada con liderazgo técnico. 
                                Mi enfoque va más allá del código: optimizo rendimiento, 
                                garantizo accesibilidad (a11y) y diseño arquitecturas escalables 
                                en la nube con AWS.
                            </p>
                            <p className="text-[#aaa] text-base leading-relaxed">
                                Con experiencia liderando equipos en consultoras de primer nivel 
                                y como fundador de una plataforma fintech activa, traigo una 
                                obsesión por la calidad, el performance y el código limpio a 
                                cada proyecto.
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
                                    <p className="text-[#666] text-sm mt-2">Años de Experiencia</p>
                                </div>
                                <div>
                                    <p className="text-white text-4xl md:text-5xl font-light tracking-[-0.02em]">270+</p>
                                    <p className="text-[#666] text-sm mt-2">Comercios Activos</p>
                                </div>
                                <div>
                                    <p className="text-white text-4xl md:text-5xl font-light tracking-[-0.02em]">2.5K</p>
                                    <p className="text-[#666] text-sm mt-2">Transacciones/Mes</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}