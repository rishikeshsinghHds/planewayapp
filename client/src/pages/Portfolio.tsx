import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  useSEO({
    title: "Our Portfolio | Alpha Grid - Projects & Case Studies",
    description:
      "Explore our portfolio of successful projects and case studies showcasing our expertise in software development, mobile apps, and digital transformation.",
    keywords:
      "portfolio, case studies, projects, software development portfolio, web development, mobile apps, successful projects",
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogType: 'website',
  });

  const portfolioItems = [
    {
      title: "Enterprise E-commerce Platform",
      category: "E-commerce",
      description: "A scalable e-commerce platform serving millions of users with real-time inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Digital Transformation Suite",
      category: "Enterprise",
      description: "Comprehensive digital transformation solution for government sector with IFMIS integration.",
      technologies: ["Angular", "Java", "Oracle"],
      image: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "Mobile Banking Application",
      category: "Mobile",
      description: "Secure mobile banking app with advanced security features and seamless UX.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI/Analytics",
      description: "Real-time analytics dashboard with machine learning predictions and insights.",
      technologies: ["React", "Python", "TensorFlow"],
      image: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    },
    {
      title: "SaaS Management Platform",
      category: "SaaS",
      description: "Multi-tenant SaaS platform for project management with collaboration features.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      image: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      title: "Healthcare Mobile App",
      category: "Healthcare",
      description: "HIPAA-compliant healthcare app connecting patients with doctors seamlessly.",
      technologies: ["Flutter", "Firebase", "Node.js"],
      image: "bg-gradient-to-br from-red-500 to-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
                Showcase of our expertise across diverse industries and technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className={`${item.image} h-64 relative flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* <div className="flex items-center text-primary font-bold group-hover:gap-3 gap-2 transition-all">
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-secondary to-secondary/90 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "1500+", label: "Projects Completed" },
                { number: "1000+", label: "Happy Clients" },
                { number: "50+", label: "Team Members" },
                { number: "95%", label: "Client Retention" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-black mb-3 text-primary">{stat.number}</div>
                  <div className="text-lg font-semibold text-white/90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6">
                Ready to Build Something Great?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and how we can help bring your vision to life.
              </p>
              <a href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-3 font-bold text-lg group">
                START YOUR PROJECT
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
