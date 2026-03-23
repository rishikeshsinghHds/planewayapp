import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`} role="banner">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20" : "bg-transparent"}`}>
          <Link href="/">
            <div className="flex items-center gap-2 group cursor-pointer" aria-label="Alpha Grid - Home">
              <div className="relative">
                <div className="absolute -inset-1 bg-primary rounded-full blur opacity-0 group-hover:opacity-30 transition duration-500" aria-hidden="true" />
                <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${scrolled || isOpen ? "text-secondary" : "text-white"}`}>
                  <span className="text-primary">Alpha</span> Grid
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors ${scrolled || isOpen ? "text-secondary/70" : "text-white/70"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <Link to="/contact">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold group" aria-label="Let's talk - Start a conversation">
              LET'S TALK
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            </Link>
            
            <button 
              className={`lg:hidden p-2 rounded-full transition-colors ${scrolled || isOpen ? "text-secondary hover:bg-secondary/5" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-b border-gray-100 lg:hidden"
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-2xl font-black text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-100" />
                <Link to="/contact">
                <Button className="w-full bg-primary h-14 text-lg font-bold rounded-xl" aria-label="Start a new project">
                  START PROJECT
                </Button>
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
