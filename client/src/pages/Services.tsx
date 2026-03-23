import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/use-seo";
import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  useSEO({
    title: "Our Services | Alpha Grid - Software Development & IT Solutions",
    description:
      "Explore our comprehensive range of services including custom software development, mobile apps, digital transformation, e-commerce, UX design, and AI solutions.",
    keywords:
      "custom software development, mobile app development, digital transformation, e-commerce, UX design, AI solutions, enterprise software, IT services",
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogType: 'website',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="relative h-[50vh] min-h-[500px] w-full overflow-hidden bg-black  flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/90 opacity-90" />
          
          <div className="container relative mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
                We deliver comprehensive digital solutions tailored to your business needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* <div className="flex items-center text-primary font-bold group-hover:gap-3 gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-secondary to-secondary/90 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals.
              </p>
             <a href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-2 font-bold text-lg group">
              GET STARTED TODAY
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
