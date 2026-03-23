import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import dashboardImg from "@/assets/images/dashboard.jpg";
import mobileAppImg from "@/assets/images/mobile-app.jpg";
import healthcareImg from "@/assets/images/healthcare.jpg";
import logisticsImg from "@/assets/images/logistics.jpg";

const PROJECTS = [
  {
    title: "Pulse-X Mobile Ecosystem",
    category: "Fintech / Core Infrastructure",
    image: dashboardImg,
    size: "col-span-12 md:col-span-8",
  },
  {
    title: "NeuroLink Dashboard",
    category: "AI / Analytics",
    image: mobileAppImg,
    size: "col-span-12 md:col-span-4",
  },
  {
    title: "MedSync Global",
    category: "Healthcare / SaaS",
    image: healthcareImg,
    size: "col-span-12 md:col-span-5",
  },
  {
    title: "SwiftLog AI",
    category: "Logistics / Automation",
    image: logisticsImg,
    size: "col-span-12 md:col-span-7",
  }
];

export function Portfolio() {
  return (
    <section id="work" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-xs"
            >
              Recent Benchmarks
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Superior</span> Performance
            </h2>
          </div>
          <button className="group flex items-center gap-4 text-xl font-bold">
            All Case Studies
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`${project.size} group relative rounded-[3rem] overflow-hidden bg-white/5 h-[400px] lg:h-[600px] cursor-pointer`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                  <div className="w-4 h-[1px] bg-primary" />
                  {project.category}
                </div>
                <h3 className="text-3xl lg:text-5xl font-black mb-6 leading-none">
                  {project.title}
                </h3>
                <div className="h-0 group-hover:h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                    View Impact Report <ArrowUpRight className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
