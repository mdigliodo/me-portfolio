import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Check, Zap, Star } from "lucide-react";

const plans = [
    {
        name: "Starter",
        hours: "20 horas",
        price: "$2,000",
        period: "/mes",
        description: "Perfecto para proyectos pequeños o consultoría puntual",
        features: [
            "Soporte por email",
            "Code reviews",
            "Consultoría técnica",
            "Documentación básica"
        ],
        popular: false
    },
    {
        name: "Professional",
        hours: "40 horas",
        price: "$3,600",
        period: "/mes",
        description: "Ideal para desarrollo continuo y liderazgo técnico",
        features: [
            "Todo lo del plan Starter",
            "Reuniones semanales",
            "Arquitectura de soluciones",
            "Code reviews detallados",
            "Mentoría de equipo",
            "Prioridad en soporte"
        ],
        popular: true
    },
    {
        name: "Enterprise",
        hours: "80+ horas",
        price: "Custom",
        period: "",
        description: "Dedicación full-time para proyectos complejos",
        features: [
            "Todo lo del plan Professional",
            "Disponibilidad extendida",
            "Team leadership completo",
            "DevOps & CI/CD",
            "Workshops y capacitaciones",
            "SLA garantizado",
            "Llamadas de emergencia"
        ],
        popular: false
    }
];

export default function PricingSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Simulación de disponibilidad (en un caso real vendría de una API o base de datos)
    const availability = {
        thisMonth: 35,
        totalCapacity: 160
    };

    const availabilityPercentage = (availability.thisMonth / availability.totalCapacity) * 100;

    return (
        <section className="py-32 md:py-40 bg-black px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[#666] text-xs tracking-[0.3em] uppercase font-medium mb-6">
                            Planes & Disponibilidad
                        </p>
                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-[1.2] tracking-[-0.02em] mb-6">
                            Flexibilidad que se adapta a tu proyecto
                        </h2>
                        <p className="text-[#888] text-lg max-w-2xl mx-auto">
                            Elige el plan que mejor se ajuste a tus necesidades. Todos incluyen código limpio, 
                            arquitectura escalable y compromiso con la calidad.
                        </p>
                    </motion.div>

                    {/* Availability Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-12 inline-flex items-center gap-3 px-6 py-3 border border-[#222] rounded-full bg-[#0a0a0a]"
                    >
                        <Clock className="w-4 h-4 text-green-500" />
                        <span className="text-[#aaa] text-sm">
                            <span className="text-white font-medium">{availability.thisMonth} horas</span> disponibles este mes
                        </span>
                        <div className="w-24 h-1.5 bg-[#222] rounded-full overflow-hidden ml-2">
                            <div 
                                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000"
                                style={{ width: `${availabilityPercentage}%` }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.15 * (index + 1) }}
                            className={`relative p-8 rounded-lg transition-all duration-300 ${
                                plan.popular
                                    ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#444] scale-105 md:scale-110'
                                    : 'bg-[#0a0a0a] border border-[#222] hover:border-[#333]'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1 px-4 py-1.5 bg-white text-black text-xs font-medium rounded-full">
                                        <Star className="w-3 h-3" />
                                        Más Popular
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-white text-2xl font-light mb-2">{plan.name}</h3>
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    <Zap className="w-4 h-4 text-[#666]" />
                                    <span className="text-[#888] text-sm">{plan.hours}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-white text-4xl font-light tracking-[-0.02em]">{plan.price}</span>
                                    <span className="text-[#666] text-lg">{plan.period}</span>
                                </div>
                                <p className="text-[#666] text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="border-t border-[#222] pt-6 mb-8">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-[#aaa] text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={`w-full py-3 rounded transition-all duration-300 text-sm font-medium ${
                                    plan.popular
                                        ? 'bg-white text-black hover:bg-[#ddd]'
                                        : 'bg-[#1a1a1a] text-white border border-[#333] hover:border-[#555]'
                                }`}
                            >
                                {plan.price === "Custom" ? "Contactar" : "Seleccionar Plan"}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 pt-12 border-t border-[#222] text-center"
                >
                    <p className="text-[#666] text-sm mb-4">
                        💡 <span className="text-[#888]">Todos los planes incluyen:</span> código limpio y documentado, 
                        best practices de la industria, y comunicación transparente
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        <div className="text-center">
                            <p className="text-white text-2xl font-light">5+</p>
                            <p className="text-[#666] text-xs mt-1">Años experiencia</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-2xl font-light">100%</p>
                            <p className="text-[#666] text-xs mt-1">Satisfacción</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-2xl font-light">24h</p>
                            <p className="text-[#666] text-xs mt-1">Respuesta promedio</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}