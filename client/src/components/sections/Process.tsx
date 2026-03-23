import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { num: "01", title: "Planning & Research", desc: "Understanding your goals and market landscape." },
    { num: "02", title: "Design & Prototyping", desc: "Creating intuitive designs and clickable prototypes." },
    { num: "03", title: "Development", desc: "Building robust solutions with clean code." },
    { num: "04", title: "Testing & QA", desc: "Ensuring bug-free and smooth performance." },
    { num: "05", title: "Deployment", desc: "Launching your product to the world." },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-pink-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary leading-tight px-4">
            Understanding Our Digital{" "}
            <span className="text-primary block sm:inline mt-1 sm:mt-0">Transformation Process</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          {/* Vertical Connecting Line for Mobile/Tablet */}
          <div className="md:hidden absolute left-[29px] top-0 bottom-0 w-0.5 bg-gray-200 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Step Number Badge */}
                <div className="w-12 h-12 sm:w-10 sm:h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold mb-4 text-base sm:text-sm group-hover:bg-primary transition-colors duration-300">
                  {step.num}
                </div>

                {/* Step Title */}
                <h3 className="font-bold text-base sm:text-lg text-secondary mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional: Mobile-specific CTA or info */}
        <div className="mt-10 sm:mt-12 text-center md:hidden">
          <p className="text-sm text-gray-600 px-4">
            Swipe to explore our complete transformation journey
          </p>
        </div>
      </div>
    </section>
  );
}