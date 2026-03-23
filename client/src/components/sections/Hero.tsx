import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Rocket, Globe } from "lucide-react";

const SLIDES = [
  {
    title: "Revolutionizing Your Digital Presence",
    highlight: "Digital Presence",
    description: "Architecting future-ready software solutions that scale with your ambitions. From stealth startups to global enterprises.",
    cta: "Start Your Journey",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-700",
    bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
  },
  {
    title: "Intelligence Driven Transformation",
    highlight: "Transformation",
    description: "Leveraging cutting-edge AI and data analytics to unlock unprecedented business value and operational efficiency.",
    cta: "Explore AI Solutions",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-purple-600 to-pink-600",
    bg: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2072"
  },
  {
    title: "Secure & Scalable Global Ecosystems",
    highlight: "Global Ecosystems",
    description: "Building resilient cloud infrastructures and secure application layers designed for the modern web.",
    cta: "View Security Specs",
    icon: <Shield className="w-6 h-6" />,
    color: "from-emerald-600 to-teal-700",
    bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2072"
  },
  {
    title: "Delivering Exceptional",
    highlight: "Experiences Worldwide",
    description: "With Cutting-Edge Digital Solutions. Our expertise in digital transformation and IT consulting fuels tech-driven growth for your business.",
    cta: "Contact Us Today",
    icon: <Shield className="w-6 h-6" />,
    color: "from-emerald-600 to-teal-700",
    bg: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=2072"
  }

];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[700px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-linear scale-110"
            style={{ backgroundImage: `url(${SLIDES[current].bg})` }}
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className={`absolute inset-0 bg-gradient-to-r ${SLIDES[current].color} opacity-20`} />
        </motion.div>
      </AnimatePresence>

      <div className="container relative mx-auto h-full px-4 md:px-6 flex flex-col justify-center">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1  mt-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                {SLIDES[current].icon}
                <span>Innovation in Motion</span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
                {SLIDES[current].title.split(SLIDES[current].highlight)[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary-foreground">
                  {SLIDES[current].highlight}
                </span>
                {SLIDES[current].title.split(SLIDES[current].highlight)[1]}
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                {SLIDES[current].description}
              </p>

              {/* <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-white group shadow-[0_0_30px_rgba(214,73,44,0.3)]">
                  {SLIDES[current].cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Watch Showcase
                </Button>
              </div> */}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-4 md:left-6 flex gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                current === i ? "w-12 bg-primary" : "w-6 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Abstract Scroll Indicator */}
        <div className="absolute bottom-12 right-6 hidden md:flex flex-col items-center gap-4">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] vertical-rl">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
