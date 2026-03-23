import { STATS } from "@/lib/constants";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract numeric value and suffix (e.g., "500+" -> 500 and "+")
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  const displayValue = useMotionValue("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      displayValue.set(Math.floor(latest).toString());
    });
  }, [springValue, displayValue]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-secondary via-secondary/90 to-secondary/70 bg-clip-text text-transparent">
      <motion.span>{isInView ? displayValue : "0"}</motion.span>
      {suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
          
          {/* Left side - Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider px-4 py-2 bg-secondary/10 rounded-full">
                Our Track Record
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-4">
              13+ Years of Excellence & Innovation
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Our numbers reflect the quality, dedication, and trust we've built with every project and client partnership.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 border-2 border-white flex items-center justify-center text-xs font-semibold text-secondary"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 ml-2">
                Trusted by industry leaders
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10 w-full lg:w-auto lg:flex-1">
            {STATS.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Card background with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl" />
                
                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Decorative dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-secondary/20 rounded-full group-hover:bg-secondary/40 transition-colors duration-300" />
                  
                  <AnimatedCounter value={stat.value} />
                  
                  <div className="mt-3 text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="mt-3 h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
}