import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  useSEO({
    title: "About Us | Alpha Grid - Our Story & Mission",
    description:
      "Learn about Alpha Grid, our mission to deliver excellence in software development, our experienced team, and our commitment to transforming businesses.",
    keywords:
      "about alpha grid, software company, digital transformation, experienced team, software development company, enterprise solutions",
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogType: 'website',
  });

  const features = [
    {
      icon: Award,
      title: "Award-Winning Team",
      description: "Our team has received numerous industry awards and recognitions for excellence.",
    },
    {
      icon: Users,
      title: "1000+ Happy Clients",
      description: "We've successfully delivered over 1500 projects for satisfied clients worldwide.",
    },
    {
      icon: Target,
      title: "8+ Years Experience",
      description: "More than a decade of proven expertise in software development and digital solutions.",
    },
    {
      icon: CheckCircle,
      title: "95% Client Retention",
      description: "Our commitment to quality ensures long-term relationships with our clients.",
    },
  ];

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
                About <span className="text-primary">Alpha</span> Grid
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
                Transforming ideas into reality through innovative technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2016, Alpha Grid emerged from a simple vision: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a thriving digital transformation company.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Over the years, we've built a reputation for delivering exceptional software solutions, working with Fortune 500 companies, startups, and everything in between.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, our diverse team of experts continues to push the boundaries of what's possible, helping clients navigate the digital landscape and achieve sustainable growth.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-12 h-96 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-6xl font-black text-primary mb-4">8+</div>
                  <div className="text-2xl font-bold text-secondary">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">Why Choose Us</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We combine technical excellence with strategic thinking to deliver results that matter.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">Our Team</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A diverse group of talented professionals dedicated to delivering excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="mb-6 w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl"></div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Team Member</h3>
                  <p className="text-primary font-semibold mb-3">Role</p>
                  <p className="text-gray-600">Expert in their field with years of experience.</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-secondary to-secondary/90 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6">Let's Work Together</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Ready to start your digital transformation journey?
              </p>
              <a href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-3 font-bold text-lg group">
                CONTACT US
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
