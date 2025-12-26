import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Check, MessageSquare } from "lucide-react";

export default function PricingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Simulación de disponibilidad part-time
    const availability = {
        label: "Full-time",
        color: "text-blue-500",
        indicatorColor: "bg-blue-500"
    };

    return (
        <section className="py-32 md:py-40 bg-black px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#666] text-xs tracking-[0.3em] uppercase font-medium mb-6">
                            Colaboración & Freelance
                        </p>
                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] tracking-[-0.02em] mb-6">
                            Servicios Profesionales on-demand
                        </h2>
                        <p className="text-[#888] text-lg max-w-2xl mx-auto">
                            Disponibilidad full-time para sumar valor a tu equipo o proyecto desde el primer día.
                            Sin overhead, enfocado en resultados.
                        </p>
                    </motion.div>

                    {/* Availability Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-12 inline-flex items-center gap-3 px-6 py-3 border border-[#222] rounded-full bg-[#0a0a0a]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${availability.indicatorColor}`}></span>
                            <span className={`relative inline-flex rounded-full h-3 w-3 ${availability.indicatorColor}`}></span>
                        </span>
                        <span className={`text-sm font-medium ${availability.color}`}>
                            Disponible {availability.label}
                        </span>
                    </motion.div>
                </div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative p-10 md:p-14 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-[#333] max-w-2xl mx-auto"
                >
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Clock className="w-6 h-6 text-[#666]" />
                            <h3 className="text-white text-2xl font-light">Modelo por Hora</h3>
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-[#666] text-xl font-light">$</span>
                            <span className="text-white text-5xl md:text-6xl font-light tracking-[-0.02em]">18 - 25</span>
                            <span className="text-[#666] text-xl font-light">USD</span>
                        </div>
                        <p className="text-[#666] text-sm mt-4">
                            Precio promedio. El valor final depende de la complejidad técnica, duración y stack tecnológico.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 border-t border-[#333] pt-10">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#aaa]">Análisis de requerimientos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#aaa]">Arquitectura escalable</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#aaa]">Code reviews & Mentoring</span>
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#aaa]">Desarrollo Frontend & Backend</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#aaa]">Optimización & Performance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[#aaa]">Integración de APIs & Cloud</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                         <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm tracking-wide font-medium rounded hover:bg-[#ddd] transition-all duration-300"
                        >
                            <MessageSquare className="w-4 h-4" />
                            Agendar Análisis Gratuito
                        </a>
                        <p className="text-[#666] text-xs mt-4">
                            Hablemos sin compromiso sobre tu proyecto para entender tus necesidades reales.
                        </p>
                    </div>
                </motion.div>
                
                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-12 mt-20"
                >
                    <div className="text-center">
                        <p className="text-white text-3xl font-light">7+</p>
                        <p className="text-[#666] text-xs mt-2 uppercase tracking-wider">Años Experiencia</p>
                    </div>
                    <div className="text-center">
                        <p className="text-white text-3xl font-light">Full-time</p>
                        <p className="text-[#666] text-xs mt-2 uppercase tracking-wider">Disponibilidad</p>
                    </div>
                    <div className="text-center">
                        <p className="text-white text-3xl font-light">Global</p>
                        <p className="text-[#666] text-xs mt-2 uppercase tracking-wider">Alcance Remoto</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}