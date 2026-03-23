import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  useSEO({
    title: "Contact Us | Alpha Grid - Get In Touch",
    description:
      "Contact Alpha Grid for your software development and digital transformation needs. We're here to help bring your ideas to life.",
    keywords:
      "contact us, get in touch, software development contact, alpha grid contact, inquiry, support",
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogType: 'website',
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "imrishi6@gmail.com",
      link: "mailto:imrishi6@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9711425615",
      link: "tel:+919711425615",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Noida, Utter Pradesh, INDIA",
      link: "#",
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
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
                Have a project in mind? We'd love to hear about it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all text-center group"
                  >
                    <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-3">{info.title}</h3>
                    <p className="text-gray-600 group-hover:text-primary transition-colors">{info.value}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4 text-center">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-center">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-3">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-3">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-3">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-3">Subject *</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-secondary mb-3">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-4 font-bold text-lg group flex items-center justify-center"
                >
                  SEND MESSAGE
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        {/* <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-gray-200 h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Map View Coming Soon</p>
              </div>
            </motion.div>
          </div>
        </section> */}

        {/* FAQ or Additional Info */}
        {/* <section className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Response Time
              </h2>
              <p className="text-gray-600 text-lg">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Monday - Friday",
                  time: "9:00 AM - 6:00 PM (EST)",
                },
                {
                  title: "Saturday",
                  time: "10:00 AM - 2:00 PM (EST)",
                },
                {
                  title: "Sunday",
                  time: "By Appointment",
                },
              ].map((hour, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <h3 className="font-bold text-secondary mb-2">{hour.title}</h3>
                  <p className="text-gray-600">{hour.time}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
