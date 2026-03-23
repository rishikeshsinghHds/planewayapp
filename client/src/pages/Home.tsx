import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/use-seo";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import WhyChooseUs from "@/components/sections/whychooseus";

export default function Home() {
  // Set SEO tags
  useSEO({
    title: "Alpha Grid | Enterprise Software Solutions & Tech Services",
    description:
      "Alpha Grid delivers cutting-edge software solutions, web development, and IT consulting services. Expert team specializing in IFMIS, Angular, TypeScript, and enterprise applications.",
    keywords:
      "software development, web development, IT services, IFMIS, Angular, TypeScript, enterprise solutions, tech consulting, government applications",
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogType: 'website',
  });

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Technologies />
        <Process />
        <Portfolio />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
