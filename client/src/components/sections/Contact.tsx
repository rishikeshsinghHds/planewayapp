'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { CheckCircle2, Link } from "lucide-react";
import manPhoneImg from "@/assets/images/man-phone.jpg";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔹 Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* CTA Banner */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center text-white mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want Tangible Results for Your Business? Let's Start
              <br />Your Journey to Success Today!
            </h2>
              <a href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg mt-4">
              Start Project
            </Button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-6">
              Let's Grow Your Business Together
            </h3>
            <p className="text-gray-600 mb-8">
              We help you digitize your business processes and improve
              operational efficiency with our custom software solutions.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Free Consultation",
                "Non-Disclosure Agreement",
                "Certified Developers",
                "On-Time Delivery",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden h-80 w-full shadow-lg">
              <img
                src={manPhoneImg}
                alt="Business consultant"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-lg">Speak to an Expert</p>
                <p className="text-sm opacity-90">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Form / Thank You */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
          >
            {!isSubmitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            ) : (
              /* THANK YOU MESSAGE */
              <div className="text-center py-16">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your request has been submitted successfully.
                  <br />
                  Our team will contact you shortly.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
