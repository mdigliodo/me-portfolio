import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Software Engineering",
        description: "Desarrollo Full Stack con Angular, Node.js, NestJS y arquitectura Cloud con AWS. Soluciones robustas, escalables y mantenibles desde el diseño hasta el deployment.",
        tech: ["Angular", "Node.js", "AWS", "TypeScript"]
    },
    {
        number: "02",
        title: "Liderazgo Técnico",
        description: "Dirección de equipos de desarrollo, refactorización de sistemas legacy, implementación de mejores prácticas y optimización de performance. Experiencia liderando equipos en Minsait.",
        tech: ["Team Lead", "Code Review", "Mentoring", "DevOps"]
    },
    {
        number: "03",
        title: "Product Development",
        description: "Desde la concepción hasta el lanzamiento. Experiencia fundando y desarrollando Mutual IAC, una plataforma fintech con +270 comercios activos procesando 2.5K transacciones mensuales.",
        tech: ["Product Strategy", "Fintech", "Scalability", "UX/UI"]
    },
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                        Servicios
                    </p>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] tracking-[-0.02em] max-w-2xl">
                        Expertise técnico con visión 
                        de producto
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