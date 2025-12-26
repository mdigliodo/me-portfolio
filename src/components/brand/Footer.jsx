import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 bg-black border-t border-[#1a1a1a] px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <p className="text-white text-lg font-light tracking-[-0.01em]">
                            Mateo Digliodo
                        </p>
                        <p className="text-[#666] text-sm mt-1">
                            Software Engineer · Team Lead · Cloud Architect
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="text-[#666] text-sm">
                            © {currentYear} All rights reserved
                        </p>
                        <span className="text-[#333]">•</span>
                        <p className="text-[#666] text-xs">
                            Built with React & Tailwind
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}