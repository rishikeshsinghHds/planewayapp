import { NAV_LINKS } from "@/lib/constants";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10" role="contentinfo" aria-label="Site Footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6">
              <span className="text-primary">Alpha</span> Grid
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A leading digital transformation company helping businesses grow with custom software and mobile app solutions.
            </p>
            <div className="flex gap-4" aria-label="Social Media Links">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on Facebook" rel="noopener noreferrer" target="_blank"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on Twitter" rel="noopener noreferrer" target="_blank"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on LinkedIn" rel="noopener noreferrer" target="_blank"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on Instagram" rel="noopener noreferrer" target="_blank"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin size={18} className="mt-1 text-primary shrink-0" aria-hidden="true" />
                  <span>Noida,<br />Utter Pradesh, INDIA</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone size={18} className="text-primary shrink-0" aria-hidden="true" />
                  <a href="tel:+919711425615" className="hover:text-primary transition-colors">+91 9711425615</a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail size={18} className="text-primary shrink-0" aria-hidden="true" />
                  <a href="mailto:imrishi6@gmail.com" className="hover:text-primary transition-colors">imrishi6@gmail.com</a>
                </li>
              </ul>
            </address>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">Angular</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">Next.js</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">Wordpress</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">Php</span>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates.</p>
            <form className="flex gap-2" aria-label="Newsletter Subscription">
              <input 
                type="email" 
                placeholder="Email Address" 
                aria-label="Email address for newsletter"
                className="bg-white/10 border-none text-white placeholder:text-gray-500 rounded px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Go
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Alpha Grid. All rights reserved.</p>
          {/* <div className="mt-4 flex justify-center gap-4 text-xs">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-600">•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-gray-600">•</span>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
