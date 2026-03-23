import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Target, BarChart, Shield, Cpu, Link } from "lucide-react";

const MODERN_SERVICES = [
  {
    title: "Intelligent Software",
    description: "Architecting neural-ready platforms that adapt to your business velocity.",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "Hyper-Growth Apps",
    description: "Mobile experiences engineered for viral loops and extreme performance.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-orange-600 to-amber-500"
  },
  {
    title: "Core Ecosystems",
    description: "Rewiring enterprise DNA with seamless digital transformation strategies.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-purple-600 to-indigo-500"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] mb-4 text-xs"
            >
              <div className="w-8 h-[2px] bg-primary" />
              Our Expertise
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-black text-secondary leading-[1.1] mb-6">
              Engineering the <span className="text-primary">Next Generation</span> of Digital Assets
            </h1>
          </div>
          <p className="text-xl text-gray-500 max-w-sm leading-relaxed border-l-2 border-primary/20 pl-6">
            We don't just build software; we architect competitive advantages in the digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {MODERN_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white transition-all duration-500 border border-transparent hover:border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <button className="flex items-center gap-2 font-bold text-secondary group-hover:gap-4 transition-all uppercase tracking-wider text-xs">
                Explore Tech Stack <ArrowUpRight className="w-5 h-5 text-primary" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3rem] bg-secondary text-white relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h3 className="text-3xl md:text-3xl font-black mb-4">Next-Gen Solutions For Seamless Digital Transformation.</h3>
              <p className="text-white/60 text-lg">Our architects are ready to audit your current infrastructure.</p>
            </div>
           <a href="/contact">
            <button className="h-16 px-10 rounded-full bg-primary hover:bg-white hover:text-secondary transition-all font-black text-lg shadow-[0_0_30px_rgba(214,73,44,0.3)]">
              Connect With us
            </button>
            </a>
          
          </div>
          {/* Decorative mesh */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(214,73,44,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>
    </section>
  );
}
